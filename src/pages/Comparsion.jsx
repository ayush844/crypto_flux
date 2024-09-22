import { useEffect, useState } from "react";
import SelectCoins from "../components/SelectCoins";
import axios from "axios";
import Loader from "../components/Loader";
import List from "../components/List";
import CoinInfo from "../components/CoinInfo";
import LineChart from "../components/LineChart";
import ToggleComponents from "../components/ToggleComponent";

const Comparison = () => {

    const [allCoins, setAllCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    // id states
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("solana");
    // data states
    const [coin1Data, setCoin1Data] = useState({});
    const [coin2Data, setCoin2Data] = useState({});
    // days state
    const [days, setDays] = useState(30);

    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
    });
  

    useEffect(() => {
        getData();
      }, []);
    
      const getData = async () => {
        setLoading(true);
        const coins = await get100Coins();
        if (coins) {
          setAllCoins(coins);
          console.log(coins);
          const data1 = await getCoinData(crypto1);
          const data2 = await getCoinData(crypto2);
          settingCoinObject(data1, setCoin1Data);
          settingCoinObject(data2, setCoin2Data);
          if (data1 && data2) {
            // getPrices
            const prices1 = await getPrices(crypto1, days, priceType);
            const prices2 = await getPrices(crypto2, days, priceType);
            console.log(prices1, prices2)
            settingChartData(setChartData, prices1, prices2);
            setLoading(false);
          }
        }
      };
    
      const onCoinChange = async (e, isCoin2) => {
        setLoading(true);
        if (isCoin2) {
          const newCrypto2 = e.target.value;
          // crypto2 is being changed
          setCrypto2(newCrypto2);
          // fetch coin2 data
          const data2 = await getCoinData(newCrypto2);
          settingCoinObject(data2, setCoin2Data);
          // fetch prices again
          const prices1 = await getPrices(crypto1, days, priceType);
          const prices2 = await getPrices(newCrypto2, days, priceType);
          console.log(prices1, prices2);
          settingChartData(setChartData, prices1, prices2);
        } else {
          const newCrypto1 = e.target.value;
          // crypto1 is being changed
          setCrypto1(newCrypto1);
          // fetch coin1 data
          const data1 = await getCoinData(newCrypto1);
          settingCoinObject(data1, setCoin1Data);
          // fetch coin prices
          const prices1 = await getPrices(newCrypto1, days, priceType);
          const prices2 = await getPrices(crypto2, days, priceType);
          console.log(prices1, prices2);
          settingChartData(setChartData, prices1, prices2);
        }
        setLoading(false);
      };
    
      const handleDaysChange = async (e) => {
        const newDays = e.target.value;
        setLoading(true);
        setDays(newDays);
        const prices1 = await getPrices(crypto1, newDays, priceType);
        const prices2 = await getPrices(crypto2, newDays, priceType);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      };
    

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const getCoinData = (id, setError) => {
        const coin = axios
          .get(`https://api.coingecko.com/api/v3/coins/${id}?myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS`)
          .then((response) => {
            if (response.data) {
              return response.data;
            }
          })
          .catch((e) => {
            console.log(e.message);
            if (setError) {
              setError(true);
            }
          });
      
        return coin;
      };

    const getPrices = (id, days, priceType, setError) => {
        const prices = axios
          .get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily&myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS`
          )
          .then((response) => {
            if (response.data) {
              console.log("Prices>>>", response.data);
              if (priceType == "market_caps") {
                return response.data.market_caps;
              } else if (priceType == "total_volumes") {
                return response.data.total_volumes;
              } else {
                return response.data.prices;
              }
            }
          })
          .catch((e) => {
            console.log(e.message);
            if (setError) {
              setError(true);
            }
          });
      
        return prices;
      };
    



      const settingChartData = (setChartData, prices1, prices2) => {
        console.log(prices1, prices2);
        if (prices2) {
          setChartData({
            labels: prices1?.map((data) => gettingDate(data[0])),
            datasets: [
              {
                label: "Crypto 1",
                data: prices1?.map((data) => data[1]),
                borderWidth: 1,
                fill: false,
                backgroundColor: "#ffc83e",
                tension: 0.25,
                borderColor: "#ffc83e",
                pointRadius: 0,
                yAxisID: "crypto1",
              },
              {
                label: "Crypto 2",
                data: prices2?.map((data) => data[1]),
                borderWidth: 1,
                fill: false,
                tension: 0.25,
                borderColor: "#FF6600",
                pointRadius: 0,
                yAxisID: "crypto2",
              },
            ],
          });
        } else {
          setChartData({
            labels: prices1?.map((data) => gettingDate(data[0])),
            datasets: [
              {
                data: prices1?.map((data) => data[1]),
                borderWidth: 2,
                fill: true,
                backgroundColor: "rgba(250, 188, 63,0.2)",
                tension: 0.25,
                borderColor: "#ffc83e",
                pointRadius: 0,
                yAxisID: "crypto1",
              },
            ],
          });
        }
      };
    

     const get100Coins = () => {
        const coins = axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS"
          )
          .then((response) => {
            console.log("RESPONSE>>>", response.data);
            return response.data;
          })
          .catch((error) => {
            console.log("ERROR>>>", error.message);
          });
      
        return coins;
      };


      const settingCoinObject = (data, setCoin) => {
        setCoin({
          id: data?.id,
          name: data?.name,
          symbol: data?.symbol,
          image: data?.image.large,
          desc: data?.description.en,
          price_change_percentage_24h: data?.market_data.price_change_percentage_24h,
          total_volume: data?.market_data.total_volume.usd,
          current_price: data?.market_data.current_price.usd,
          market_cap: data?.market_data.market_cap.usd,
        });
      };


      const gettingDate = (number) => {
        const date = new Date(number);
        return date.getDate() + "/" + (date.getMonth() + 1);
      };



      const handlePriceTypeChange = async (e) => {
        const newPriceType = e.target.value;
        setLoading(true);
        setPriceType(newPriceType);
        const prices1 = await getPrices(crypto1, days, newPriceType);
        const prices2 = await getPrices(crypto2, days, newPriceType);
        settingChartData(setChartData, prices1, prices2);
        setLoading(false);
      };
    

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      

    return ( <div className="min-h-full">
        {
            (loading || !coin1Data.id || !coin2Data.id) ? (
                <Loader />
            ) : (
                <>
                    <SelectCoins 
                    allCoins={allCoins}
                    crypto1={crypto1}
                    crypto2={crypto2}
                    onCoinChange={onCoinChange}
                    days={days}
                    handleDaysChange={handleDaysChange}
                    />
                    <div className="bg-gray-950 p-4 pb-2 rounded-xl w-[90%] block mx-auto my-6">
                      <List coin={coin1Data} />
                    </div>
                    <div className="bg-gray-950 p-4 pb-2 rounded-xl w-[90%] block mx-auto my-6">
                      <List coin={coin2Data} />
                    </div>
                    <div className="bg-gray-950 p-4 pb-2 rounded-xl w-[90%] block mx-auto my-6">
                    <ToggleComponents priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
                      <LineChart chartData={chartData} multiAxis={true} />
                    </div>
                    <CoinInfo  title={coin1Data.name} desc={coin1Data.desc}  />
                    <CoinInfo  title={coin2Data.name} desc={coin2Data.desc}  />

                </>
            )
        }

    </div> );
}
 
export default Comparison;
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import List from '../components/List';
import CoinInfo from '../components/CoinInfo';
import LineChart from '../components/LineChart';
import SelectDays from '../components/SelectDays';
import ToggleComponents from '../components/ToggleComponent';

const CoinPage = () => {



    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

    const [coin, setCoin] = useState({});

    const [days, setDays] = useState(30);
    const [priceType, setPriceType] = useState("market_caps");

  const [chartData, setChartData] = useState({ labels: [], datasets: [{}] });



    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  

    useEffect(()=>{

      if(id){
        getData();
      }

    }, [id])



    const getData = async () => {
      setIsLoading(true);
      let coinData = await getCoinData(id, setError);
      settingCoinObject(coinData, setCoin);
      if (coinData) {
        const prices = await getPrices(id, days, priceType, setError);
        if (prices?.length > 0) {
          settingChartData(setChartData, prices);
          setIsLoading(false);
        }
      }
    }

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




  const getCoinData = (id, setError) => {
    const coin = axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}?myapi=CG-Rf8ZBzdirmfSzUZMwRhXFfoS`)
      .then((response) => {
        if (response.data) {
          return response.data;
        }
      })
      .catch((e) => {
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
        if (setError) {
          setError(true);
        }
      });
  
    return prices;
  };

  const gettingDate = (number) => {
    const date = new Date(number);
    return date.getDate() + "/" + (date.getMonth() + 1);
  };

  const settingChartData = (setChartData, prices1, prices2) => {
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
            borderColor: "#ffc83e",
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

  const convertNumber = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  if (arr.length == 5) {
    //Trillions
    return arr[0] + "." + arr[1].slice(0, 2) + "T";
  } else if (arr.length == 4) {
    //Billions
    return arr[0] + "." + arr[1].slice(0, 2) + "B";
  } else if (arr.length == 3) {
    // Millions
    return arr[0] + "." + arr[1].slice(0, 2) + "M";
  } else if (arr.length == 2) {
    // Thousands
    return arr[0] + "." + arr[1].slice(0, 2) + "K";
  } else {
    // Hundreds
    return number.toLocaleString();
  }
};

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event) => {
    setIsLoading(true);
    setPriceType(event.target.value);
    const prices = await getPrices(id, days, event.target.value, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };





  return (
    <div className=' min-h-[80vh]'>

      {
        isLoading ? (
          <Loader /> 
        ) : (
          <div className='p-4 pb-2 rounded-xl w-[90%] block m-6 mx-auto'>
            
            <List coin={coin} />
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <ToggleComponents priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
            <LineChart chartData={chartData} />
            <CoinInfo  title={coin.name} desc={coin.desc}  />

          </div>
        )
      }

    </div>
  )
}

export default CoinPage
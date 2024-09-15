import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import List from '../components/List';
import CoinInfo from '../components/CoinInfo';

const CoinPage = () => {

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

    const [coin, setCoin] = useState({});

    useEffect(()=>{

      if(id){
        getData();
      }

    }, [id])



    const getData = async () => {
      setIsLoading(true);
      let coinData = await getCoinData(id, setError);
      console.log("Coin DATA>>>>", coinData);
      settingCoinObject(coinData, setCoin);
      if (coinData) {
        setIsLoading(false);
      }
    }

    const settingCoinObject = (data, setCoin) => {
      setCoin({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h: data.market_data.price_change_percentage_24h,
        total_volume: data.market_data.total_volume.usd,
        current_price: data.market_data.current_price.usd,
        market_cap: data.market_data.market_cap.usd,
      });
    };




  const getCoinData = (id, setError) => {
    const coin = axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
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



  return (
    <div>

      {
        isLoading ? (
          <Loader /> 
        ) : (
          <div className='p-4 pb-2 rounded-xl w-[90%] block m-6 mx-auto'>
            
            <List coin={coin} />
            <CoinInfo  title={coin.name} desc={coin.desc}  />
            <h1>COIN ID IS: {id}</h1>

          </div>
        )
      }

    </div>
  )
}

export default CoinPage
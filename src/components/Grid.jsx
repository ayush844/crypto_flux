import React from 'react'
import { Link } from 'react-router-dom'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const Grid = ({coin}) => {
  return (
    <Link to={`/coin/${coin.id}`}>  
    <div className={`flex flex-col gap-3 md:gap-6 w-64 h-80 md:w-80 md:h-80 p-8 bg-stone-900 rounded-lg border-2 border-customYellow cursor-pointer text-white m-2 ${coin.price_change_percentage_24h >= 0 ? "hover:border-green-500": "hover:border-red-500"}`}>
        <div className='flex justify-start items-center gap-4'>

            <img src={coin.image} alt="coin" className=' h-12 w-12 md:h-14 md:w-14 rounded-full' />

            <div className='flex flex-col justify-between gap-[0.2rem]'>
                <p className="uppercase font-bold text-xl m-0 ">{coin.symbol}</p>
                <p className="m-0 font-normal text-grey text-base text-gray-400 ">{coin.name}</p>
            </div>

        </div>

        <div className="flex justify-start items-center gap-3">
            <div className={`border-2 ${coin.price_change_percentage_24h > 0 ? "border-green-500 text-green-500 hover:bg-green-500" : "border-red-500 text-red-500 hover:bg-red-500"}  rounded-full px-4 py-1 font-semibold  hover:text-white transition-all duration-300`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={`border-2 ${coin.price_change_percentage_24h > 0 ? "border-green-500 text-green-500 hover:bg-green-500" : "border-red-500 text-red-500 hover:bg-red-500"} p-1 flex justify-center items-center rounded-full  hover:text-white transition-all duration-300`}>
                {coin.price_change_percentage_24h > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            </div>
        </div>

        <p className={` ${coin.price_change_percentage_24h >= 0 ? "text-green-500": "text-red-500"} font-semibold text-[0.9rem] md:text-[1.1rem] m-0`}>
            ${coin.current_price.toLocaleString()}
        </p>

        <p className="m-0 font-normal text-gray-600 text-sm">
          Total Volume : {coin.total_volume.toLocaleString()}
        </p>
        <p className="m-0 font-normal text-gray-600 text-sm">
          Market Capital : ${coin.market_cap.toLocaleString()}
        </p>

    </div>
    </Link>
  )
}

export default Grid 
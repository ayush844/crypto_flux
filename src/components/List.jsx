import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';


const List = ({coin}) => {
  return (

    <Link to={`/coin/${coin.id}`}>  
    <tr className={`w-[95%] gap-8 md:gap-0 md:w-[100%] px-6 py-2 p-4 mb-2 flex justify-between items-center mx-auto rounded-lg cursor-pointer text-white border-2 border-customYellow bg-[#0F0F0F] hover:bg-gray-900 overflow-x-auto !important m-2 
    ${coin.price_change_percentage_24h >= 0 ? "hover:border-green-500": "hover:border-red-500"}`}>
        <Tooltip title='Coin Info' placement='bottom-start'>
        <td className='flex justify-start items-center gap-4 '>
            <img src={coin.image} alt="coin" className=' max-w-[3rem] h-auto md:h-12 md:w-12 rounded-full' />
        {/* </td>
        <td className='items-start'> */}
            
            <div className='flex flex-col justify-between gap-[0.2rem] items-start'>
                <p className="uppercase font-bold text-xl m-0 items-start">{coin.symbol}</p>
                <p className="m-0 font-normal text-grey text-base text-gray-400 items-start">{coin.name}</p>
            </div>
            
        </td>
        </Tooltip>

        <td className="flex justify-start gap-3 items-start"> 
            <div className={`border-2 ${coin.price_change_percentage_24h > 0 ? "border-green-500 text-green-500 hover:bg-green-500" : "border-red-500 text-red-500 hover:bg-red-500"}  rounded-full px-4 py-1 font-semibold  hover:text-white transition-all duration-300`}>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className={`border-2 ${coin.price_change_percentage_24h > 0 ? "border-green-500 text-green-500 hover:bg-green-500" : "border-red-500 text-red-500 hover:bg-red-500"} p-1 flex justify-center items-center rounded-full  hover:text-white transition-all duration-300`}>
                {coin.price_change_percentage_24h > 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
            </div>
        </td>

        <Tooltip title="current price" placement='bottom-start'>
            <td>
                <p className={` ${coin.price_change_percentage_24h >= 0 ? "text-green-500": "text-red-500"} font-semibold text-[0.9rem] md:text-[1.1rem] m-0`}>
                ${coin.current_price.toLocaleString()}
                </p>
            </td>
        </Tooltip>

        <Tooltip title="total volume" placement='bottom-start'>
        <td>
        <p className="m-0 font-normal text-gray-400 text-sm">
        ${coin.total_volume.toLocaleString()}
        </p>
        </td>
        </Tooltip>

        <Tooltip title="market cap" placement='bottom-start'>
        <td>
        <p className="m-0 font-normal text-gray-400 text-sm">
        ${coin.market_cap.toLocaleString()}
        </p>
        </td>
        </Tooltip>
    </tr>
    </Link>
  )
}

export default List
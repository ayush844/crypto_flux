import React from 'react'
import { useParams } from 'react-router-dom'

const CoinPage = () => {

    const {id} = useParams();

  return (
    <div>
        
        <h1>COIN ID IS: {id}</h1>
        CoinPage

    </div>
  )
}

export default CoinPage
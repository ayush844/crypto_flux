
import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='bg-gradient-to-r from-zinc-800 to-stone-900   h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-[1000]'>
        <CircularProgress color="success" sx={{ color: '#FFB200' }}  />
    </div>
  )
}

export default Loader
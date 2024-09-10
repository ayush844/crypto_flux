import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Footer} from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Comparison from './pages/Comparsion'
import Explore from './pages/Explore'
import NotFound from './pages/404'

function App() {

  return (
    <div className='scrollbar scrollbar-thumb-customYellow scrollbar-track-custom h-[100vh] overflow-y-scroll bg-gradient-to-r from-zinc-800 to-stone-900'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comparison' element={<Comparison />} />
          <Route path='/explore' element={<Explore />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App

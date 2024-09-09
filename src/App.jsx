import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import { Footer} from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='scrollbar scrollbar-thumb-customYellow scrollbar-track-custom h-[100vh] overflow-y-scroll'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'

function App() {
  return (
    <div className='h-screen w-full bg-black font-[Satoshi_Regular]'>
      <Navbar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App

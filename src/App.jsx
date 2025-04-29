import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App

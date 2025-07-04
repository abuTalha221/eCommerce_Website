import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import TopProducts from './components/TopProducts/TopProducts'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, [])

  return (
    <div>
      <Navbar />
      <Hero />
      <Products/>
      <TopProducts />
    </div>
  )
}

export default App

import React from 'react'
import Image1 from '../../assets/hero/women.png'
import Image2 from '../../assets/hero/shopping.png'
import Image3 from '../../assets/hero/sale.png'
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Flash Sale: Up to 50% Off on Men's Fashion ",
    description:
        "Step up your style game with our hottest deals on jackets, shirts, and more. Limited time only!",
},
{
    id: 2,
    img: Image2,
    title: "Exclusive: 30% Off All Women's Collection",
    description:
        "From elegant dresses to trendy tops—refresh your wardrobe with our handpicked women's fashion.",
},
{
    id: 3,
    img: Image3,
    title: "Mega Clearance: 70% Off Everything!",
    description:
        "Don't miss the final markdowns of the season. Grab your favorites before they're gone forever!",
}

]

const Hero = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
  
      {/* Background Pattern */}
      <div className='h-[700px] w-[700px] bg-[#F23329]/20 absolute -top-1/2 right-0 rounded-3xl rotate-45 '></div>
  
      {/* Hero Section */}
      <div className='container p-12 pb-8 sm:pb-0'>
        <Slider{...settings}>

          {ImageList.map((data) => (
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
              order-2 sm:order-1 relative z-10">
                <h1 
                data-aos = "zoom-in"
                data-aos-duration = "500"
                data-aos-once = "true"
                className='text-5xl sm:text-5xl lg:text-6xl font-bold'>
                  {data.title}
                </h1>
                <p 
                data-aos = "fade-up"
                data-aos-duration = "500"
                dara-aos-delay = "100"
                className='text-sm'>
                  {data.description}
                </p>
                <div
                data-aos = "fade-up"
                data-aos-duration = "500"
                dara-aos-delay = "300"
                >
                  <button className='bg-gradient-to-r from-[#F23329] to-[#d7615b] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer'>
                    Order Now
                  </button>
                </div>
              </div>
              {/* image section */}
              <div
                data-aos = "zoom-in"
                data-aos-once = "true"
                className='order-1 sm:order-2'>
                <div className='relative z-10' >
                  <img src={data.img} alt=""
                  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                </div>
              </div>
            </div>
          </div>
          ))}
        </Slider>
        
      </div>
  
    </div>
  );
} 
export default Hero

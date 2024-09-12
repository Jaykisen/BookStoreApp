import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import Cards from './Cards';


function Freebook() {
    const filterData = list.filter((data)=>data.category==="free")
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-15 px-4'>
    <div><h1 className='font-semiboldbold text-xl pb-2'>Free Offered Book</h1>
    <p> A bookstore is a haven for bibliophiles, offering a diverse collection of literature that caters to all tastes and interests. From bestsellers and classic novels to niche genres and academic texts, these spaces provide an opportunity to explore new ideas and immerse oneself in different worlds.</p></div>
    
    <div>
    <Slider {...settings}>
    {filterData.map((item) => (
       <Cards item ={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook

import React from 'react'
import Slider from "react-slick";

import slid1 from '../../assest/images/slider-image-1.jpeg'
import slid2 from '../../assest/images/slider-image-2.jpeg'
import slid3 from '../../assest/images/slider-image-3.jpeg'



export default function HomeSlider() {


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,display: "none" }}
        onClick={onClick}
      />
    );
  }


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
  };


  return (
    <>

<div className="container">
<Slider {...settings} className='w-75 mx-auto py-5'>
      <div>
       <img src={slid1} width={'100%'} height={400} alt="" />
      </div>
      <div>
      <img src={slid2} width={'100%'} height={400} alt="" />

      </div>
      <div>
      <img src={slid3} width={'100%'} height={400} alt="" />
      </div>
     
    </Slider>

  </div>   </>

  )
}

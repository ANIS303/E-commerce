import React ,{useEffect ,useState} from 'react'
import Slider from 'react-slick'
import axios from 'axios'

import styles from './Homecatagoty.module.css'
import Loading from '../Loading/Loading'
export default function Homecatagoty() {

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


  const[Catagory,setAllCatagory]= useState([])

  async function getCatagory(){
    let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/categories')
    setAllCatagory(data.data)
    }
    
    useEffect(()=>{
      getCatagory()
    },[])
        

  var settings = {
    dots:true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
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
   <div className=" container">
   <h2 className=' fw-bolder'>Ouer Catagory</h2>
{Catagory.length!=0?    <Slider className='w-75 mx-auto py-5' {...settings}>
      
      {Catagory.map((brand)=><div className=' gx-2'>
        <img src={brand.image} height={200} width={'100%'} alt="" />
      <h4>{brand.name}</h4>
      </div>)}
    </Slider>
  :<Loading/>}

   </div>
   </>
  )
}

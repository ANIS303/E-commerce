import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import  { CartContext } from '../../Context/CartContext';



export default function DetailsProducts() {

let {createCart} = useContext(CartContext)

  const[detailsProducts,setAllDetailsProducts]= useState([])
  let {id} = useParams()

async function setAllDetails(){
let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
setAllDetailsProducts(data.data)
}

useEffect(()=>{
  setAllDetails()
},[])


var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  return (
    <>

<div className="container py-5">
  <div className="row align-items-center">
  <div className="col-md-4">
  <Slider {...settings}>
  {detailsProducts?.images?.map((imgs)=><div>
<img src={imgs} className='w-50' alt="" />

</div>
)}

     
    </Slider>
  </div>
  <div className="col-md-8">
    <h2>{detailsProducts.title}</h2>
    <p>{detailsProducts.description}</p>
    <div className="sallary-rate d-flex justify-content-between">
  <span> {detailsProducts.price}EGP</span>
<div>  <i className='fa fa-star rating-color'></i><span> {detailsProducts.ratingsAverage}</span>
</div>
</div>
<button onClick={()=> createCart(detailsProducts._id)} className='btn  bg-main text-white w-100 pt-2 mt-3'>+ Add</button>

  </div>
  </div>
  </div>



    
    </>
  )
}

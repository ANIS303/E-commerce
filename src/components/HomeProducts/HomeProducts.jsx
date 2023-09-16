import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import style from'./HomeProducts.module.css'
import Loading from '../Loading/Loading'
import { WishContext } from '../../Context/WishContext'

export default function HomeProducts() {
  let {wishing,wishData} =useContext(WishContext)
let {creatCart,setNumOfCartItems} = useContext(CartContext)
  const[allProducts,setAllProducts]= useState([])
async function showPro(){
let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products')
setAllProducts(data.data)
}

let gettingWish =(id)=>{
    
  for (const data of wishData) {
    if(data?._id===id){
      return true
    }
  }
  return false
}


async function generateCard(productid){

   let response = await creatCart(productid)
 if(response.data.status === "success"){
toast.success(response.data.message,{
  className:" text-center border-success border-3 box-shadow",
  position:"bottom-right"
})
setNumOfCartItems(response.data.numOfCartItems)
 }else{
  toast.error(response.data.message,{
    className:" text-center border-success border-3 box-shadow",
    position:"bottom-right"
  })
  
 }

}


useEffect(()=>{
showPro()

},[])
  return (
   <div className="container py-5">
   {allProducts.length!==0? <div className="row ">
    
    {allProducts.map((product)=><div key={product.id} className="col-md-2  gx-4 gy-3 rounded-3 text-danger ">
    <div className={style.card2}>
  
    <div className=" px-2 py-3  rounded-3" >

<Link to={'/DETAILS-PRODUCT/' + product.id}>
 <img src={product.imageCover} className='w-100' alt="" />
<p className='pt-2'>{product?.brand?.name}</p>
<h3 className='h6 py-1'>{product.title.split(" ").splice(0,2).join(" ")}</h3>
<div className="sallary-rate d-flex justify-content-between">
 <span> {product.price}EGP</span>
<div>  <i className='fa fa-star rating-color'></i><span> {product.ratingsAverage}</span>
</div>
</div>

 </Link>
 <div className="div d-flex align-items-center justify-content-between">
 <button onClick={()=> generateCard(product._id)} className={[style.btn , style.span," text-white my-3"].join(" ")}>
<span></span>
<span></span>
<span></span>
<span></span> + Add
</button>
<div className='mb-1 text-danger ms-auto pe-2' onClick={(event)=>{wishing(event,product?._id)}}><i className={gettingWish(product._id)?"fa-solid fa-heart fa-lg":"fa-regular fa-heart fa-lg"}></i></div>
 </div>

 </div>
 
</div>




</div>

)}
  </div>:<Loading/>}
   </div>
  )
}

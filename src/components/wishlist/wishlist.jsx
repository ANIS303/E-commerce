import React, { useContext, useEffect, useState } from 'react'
import styles from "./wishlist.module.css";
import { WishContext } from '../../Context/WishContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import Loading from '../Loading/Loading';

export default function Favorites() {
  let [cartLoading,setCartLoading]=useState(false)
  let [err,setError]=useState(false)
  let {cartId,setCartId}= useContext(CartContext)
  let {wishing,wishData,isChanging} =useContext(WishContext)


  let cartIdhandel = async (id)=>{
    setCartLoading(true)
   let response = await cartId(id)
   if(response?.data?.status=="success"){
    setCartId(response?.data?.numOfCartItems)
    toast.success(response.data.message,{position:"bottom-left",className:"shadow-lg text-center"})
    setCartLoading(false)
   }else{
    toast.error("Check Connection",{position:"bottom-left",className:"shadow-lg text-center"})
    setCartLoading(false)
   }
  }

  let checkData=()=>{
    if (wishData?.length==0){
      setError("There is no Favourite")
    }
  }
useEffect(()=>{
  checkData()
},[wishData])
  return (

      <>
      <div className="application">
            <Helmet>
                <title>Favorites</title>
            </Helmet>
        </div>
    <div className="container my-5">

     { cartIdhandel.length !==0?      <div className="row g-2">
        {err?<><div className="alert alert-danger">{err}</div></>:""}
      {wishData?.map((product,index)=> <div key={index} className='col-lg-2 col-md-4'><div className="product p-2 shadow-lg ">
          <Link to={"/productsDetails/"+product._id} className='nav-link'>
          <img src={product?.imageCover} className='img-fluid' alt="" />
          <p className='text-success fw-bold'>{product?.category?.name}</p>
            <h3 className='h6'>{product?.title?.split(" ").splice(0,2).join(" ")}</h3>
            <div className="d-flex justify-content-between"> 
            <p>{product?.price} EGP</p>
            <div className="rate">
              <span>{product?.ratingsAverage}</span><i className='fa fa-star text-warning'></i>
            </div>
            </div>
            </Link>
            <button className='btn mb-1 text-danger' onClick={(event)=>{wishing(event,product._id)}}>{isChanging?<i className="fa-regular fa-heart fa-beat "></i>:<i className="fa-solid fa-heart fa-lg"></i>}</button>
        </div></div>)}
      </div>
:<Loading/>}
    </div>
</>)
}
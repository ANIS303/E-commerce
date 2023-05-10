import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import { Offline } from "react-detect-offline";
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

export default function Cart() {
const [cartDETAILS,setAllCartDetails] = useState([])
let {getCart , updateCart ,deleteitem,clearData}= useContext(CartContext)

async function getCartDetails(){
  let res = await getCart()
  setAllCartDetails(res.data)
}

async function getCartUpdate(id , count){
  let res = await updateCart(id,count)

  setAllCartDetails(res.data)
}
async function deletingItem(id){
  let res = await deleteitem(id)
  setAllCartDetails(res.data)
}

async function clearAllData(){
  let res = await clearData()
  setAllCartDetails(res.data)
}


useEffect(()=>{
  getCartDetails()
},[])
  return (
    <>
    
    <Helmet>
                <meta charSet="utf-8" />
                <title> YOUER Cart</title>
            </Helmet>


  <div>
    {/* <Online><span className='badge text-bg-success network-stuts'> you're now online</span> </Online> */}
    <Offline><span className='badge text-bg-danger network-stuts'>you're now offline</span></Offline>
  </div>


{cartDETAILS.length!==0? <>
<div className="container ">
{cartDETAILS && cartDETAILS.data && <div className="container  my-5  p-5">
     <div className=' d-flex justify-content-between pb-5'>
     <div>
      <h3 className='fw-bolder py-2'>YOUR CART</h3>
      <h5>total price :<span className=' text-info  fw-bolder px-2'>{cartDETAILS?.data?.totalCartPrice}</span> </h5>
      </div>
      <div>
        <button className={[styles.btn , styles.span," text-white my-3"].join(" ")} onClick={()=>clearAllData()}><span></span>
  <span></span>
  <span></span>
  <span></span>Clear
  </button>
      </div>
     </div>
      {cartDETAILS.data.products.map((product) => <div key={product?.product._id} className='row  py-2 px-3 mb-4 '>
     <div className={[styles.card2 , styles.shadow].join(" ")}>
     <div className="col-md-2">
          <img src={product.product.imageCover} className='w-100' alt="" />
        </div>
        <div className="col-md-10 d-flex justify-content-between ">
        <div>
        <h4>{product.product.title}</h4>
          <p className=' text-main'>{product?.price}EGP</p>
          <button className=' btn  text-danger my-3' onClick={()=>deletingItem(product?.product._id)}> <i className=' fa fa-trash'></i> DELETE</button>

        </div>
        <div className='d-flex align-items-center '>
<button className='btn btn-cart bg-main text-white'onClick={()=>getCartUpdate(product?.product._id,product?.count+1)}>+</button>
<p className='mx-3 mb-0'>{product?.count}</p>
<button className='btn btn-cart bg-danger text-white 'onClick={()=>getCartUpdate(product?.product._id,product?.count-1)}>-</button>

        </div>
        </div>

     </div>
      </div>)}
      <Link to={'/Check-Payment'} className=' btn bg-main text-white'>procced to payment</Link>
    </div>
}
</div></>:<Loading/>}    
    
    
    </>
  )
}

import React, { useEffect } from 'react'
import styles from './Brands.module.css'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
export default function Brands() {




  const[allBrands,setAllBrands]= useState([])
  async function showBrands(){

  

    let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/brands')
    setAllBrands(data.data)
    }
    
    useEffect(()=>{
      showBrands()
    },[])
    


  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>BRANDS </title>
            </Helmet>

    <div className="container my-5 ">
      {allBrands.length!=0?      <div className="row g-4">
       
       {allBrands.map((brand)=>
       <div key={brand._id}  className="col-md-3">
          <div class={styles.card}>
                <Link to={'/BRAND-DETAILS/' + brand._id}>
 
           <h3 className=' text-uppercase h3 pt-3  fw-bolder'>{brand.name}</h3>
           <img src={brand.image} className=' w-100 mb-4' alt="" />
 
           </Link>
           </div>
         </div>)}
         
       </div>
 :<Loading/>}
    </div>
    
    
    </>
  )
}

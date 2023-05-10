import React, { useEffect, useState } from 'react'
import styles from './BrandsDEtails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function BrandsDEtails() {

  const[detailsBrand,setAllDetailsBrand]= useState([])
  let {id} = useParams()

async function setAllDetails(){
let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
setAllDetailsBrand(data.data)
}

useEffect(()=>{
  setAllDetails()
},[])


  return (
    <>
        <div className="container py-5 d-flex justify-content-center ">
      <div className="row ">
       
      <div className={styles.card}>
      <div key={detailsBrand._id} className="col-md-12">
            <h3  className='  py-3'>{detailsBrand.name}</h3>
          <img src={detailsBrand.image} className=' w-75 m-5' alt="" />
          
        </div>
        </div>
      </div>
    </div>

    
    
    
    </>
  )
}

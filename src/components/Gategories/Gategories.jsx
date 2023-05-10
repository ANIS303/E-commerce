import React, { useEffect, useState } from 'react'
import styles from './Gategories.module.css'
import axios from 'axios'
import Loading from '../Loading/Loading'
import { Helmet } from 'react-helmet'
export default function Gategories() {


  const[Catagory,setAllCatagory]= useState([])

  async function getCatagory(){
    let {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/subcategories')
    setAllCatagory(data.data)
    }
    
    useEffect(()=>{
      getCatagory()
    },[])






  return (
    <>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Catagories </title>
            </Helmet>

 
<div className="container">
  {Catagory.length!=0?  <div className="row g-3 py-5">
  {Catagory.map((brand)=> <div className="col-md-4 ">
  <div class={styles.card}>
      <h3>{brand.name}</h3>
      </div>

    </div>)}
  </div>
:<Loading/>}
</div>

    </>
  )
}

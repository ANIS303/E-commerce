import React from 'react'
import styles from './Home.module.css'
import HomeProducts from '../HomeProducts/HomeProducts'
import HomeSlider from '../HomeSlider/HomeSlider'
import Homecatagoty from '../Homecatagoty/Homecatagoty'
import { Helmet } from 'react-helmet'
export default function Home() {
  return (
    <>

<Helmet>
                <meta charSet="utf-8" />
                <title>  E-Commerce</title>
            </Helmet>

    <HomeSlider></HomeSlider>
    <Homecatagoty></Homecatagoty>
    <HomeProducts></HomeProducts>
    
    
  
    
    </>
  )
}

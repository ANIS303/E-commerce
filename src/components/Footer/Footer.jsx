import React from 'react'
import { Link } from 'react-router-dom'
import badg1 from '../../assest/images/128x128.png'
import badg2 from '../../assest/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png'

import styles from './Footer.module.css'




export default function Footer() {
  return (
    <>
    <footer className='px-5'>
      <div className=" text-white ">
        <h3 className=' py-3'>GET The FreshCartApp</h3>
        <p>We Will Send You a Link, Open it on Your Phone to download the app.</p>
        <div className="row g-1 d-flex flex-column mb-5 ">
          <div className="col-md-12   mt-2 d-flex justify-content-between align-items-center">
            <input type="email" placeholder='Email' className=' form-control  w-75' />
            <button className=' btn btn-success '>Search App Link</button>
          </div>
         
        </div>
        <div className="col-md-12 d-flex justify-content-between align-items-center border-top border-bottom ">
            <div>
            <ul >
<li className={[styles.icons, "d-flex justify-content-between align-items-center mt-3 "].join(" ")}>
          <a className={[styles.circel,'p-2'].join(" ")} target='blank' href="https://paymentservices.amazon.com/?s_kwcid=AL!12097!3!651750340286!e!!g!!amazon%20pay&gclid=Cj0KCQjw3a2iBhCFARIsAD4jQB1jD7RZrjkm8jpAZw3b7WZ4ZgVXKpicHiaBg44CGe-QV5rym1ne0oUaAiL-EALw_wcB"><i className='fa-brands fa-cc-amazon-pay'></i></a>
          <a className={[styles.circel,'p-2'].join(" ")} target='blank' href="https://www.paypal.com"><i className=' fa-brands fa-paypal'></i></a>
          <a className={[styles.circel,'p-2'].join(" ")} target='blank' href="https://eg.visamiddleeast.com"><i className=' fa-brands  fa-cc-visa'></i></a>
          <a className={[styles.circel,'p-2'].join(" ")} target='blank' href="https://www.mastercard.us"><i className=' fa-brands fa-cc-mastercard'></i></a>
        </li>
      
</ul>

            </div>
            <div>
           
<div className='d-flex justify-content-between align-items-center'>
  <p className=' h6'>Get deliveries With FreshCart.</p>
  <a href='https://play.google.com/store/games?pli=1' target='blank'>  <img src={badg1}  className='w-75 mx-3' alt="" />
</a>

<a href="https://www.apple.com/eg/app-store/" target='blank'>  <img src={badg2} className='w-100' alt="" />
</a>
</div>



            </div>
          </div>
      </div>
     

    </footer>
    
    
    </>
  )
}

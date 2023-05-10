import React, { useContext } from 'react'
import styles from './Checkpay.module.css'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/CartContext';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';



export default function Checkpay() {
 let {generatePayOnline,cartId} = useContext(CartContext)
async function paymrnet(values){
let {data} = await generatePayOnline(cartId,values)
if(data.session){
  window.location.href = data?.session.url
}
}

let formik = useFormik({
  initialValues:{
    details:"",
    phone:"",
    city:"",

  },
  onSubmit:paymrnet

})

  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Details To pay</title>
                <link href='../../assest/images/credit-card.png' ></link>
            </Helmet>
    <div className="container my-5">
      <form action="" className='w-50 mx-auto' onSubmit={formik.handleSubmit}>
      <label htmlFor="details">Details</label>
<input type="text" id='details' className=' form-control mb-3' name='details' value={formik.values.details} onChange={formik.handleChange}  />

<label htmlFor="phone">phone</label>
<input type="tel" id='phone' className=' form-control mb-3' name='phone' value={formik.values.phone} onChange={formik.handleChange}/>


<label htmlFor="city">city</label>
<input type="text" id='city' className=' form-control mb-3' name='city' value={formik.values.city} onChange={formik.handleChange}  />

<div className='d-grid gap-2 col-4 mx-auto my-4'>
<button type='submit' className='btn btn-outline-info  btn-lg'>Pay</button>

</div>
      </form>
    </div>
    
    
    
    </>
  )
}

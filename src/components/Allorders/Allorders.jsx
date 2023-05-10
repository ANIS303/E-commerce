import React, { useEffect, useState } from 'react'
import styles from './Allorders.module.css'
import axios from 'axios';
import Cart from '../Cart/Cart';
import { Helmet } from 'react-helmet';



export default function Allorders({userData}) {

const [allOrders,setAllOrders] =useState(null)

  async function getALLPay(){
    
try{
let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/orders/user/${userData?._id}`)
setAllOrders(data)
} catch(error){
}

 }

useEffect(()=>{
  getALLPay()
},[])
  


  return (<>
   <Helmet>
                <meta charSet="utf-8" />
                <title>YOUER ORDERS </title>
            </Helmet>

   {allOrders? <><div className='alert alert-success mx-auto  my-5 text-center h3 container' role="alert">
      <strong>Payment is Success </strong>
    </div><div className="container">
        <div className="row">
          {allOrders.map((order, idx) => <div key={idx} className="col-md-8 mx-auto">
            <div>
              <h5>order type :{order?.paymentMethodType}</h5>

              <h5>{order?.isDelivered}</h5>
            </div>
            <div>
              <p>delivered to ({order?.shippingAddress.city}) in ({order?.shippingAddress?.details})</p>
              <p>{order?.shippingPrice}</p>
              <p>{order?.taxPrice}</p>
              <h5>{order?.totalOrderPrice}</h5>
            </div>
          </div>

          )}
        </div>
      </div> </>: <Cart/> }
   </>
  )
}

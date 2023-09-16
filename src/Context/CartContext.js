import axios from "axios";
import { createContext, useEffect, useState } from "react";


let headers = {token:localStorage.getItem('userInfo')}


export let CartContext = createContext(0)
export default function CartContextProvider(props){
   
    const [numOfCartItems , setNumOfCartItems] = useState(0)
    const [cartId , setCartId] = useState(null)



useEffect(()=>{
    getBisValues()


},[])
async function getBisValues(){
let data = await getCart();
if (data.status == 200){
   
setNumOfCartItems(data.data.numOfCartItems);
setCartId(data?.data?.data._id);
console.log(data.data.data._id,'from context',data.data.numOfCartItems);

}


}




const [cart , setCart] = useState(0)

 function creatCart(productId){
   return axios.post('https://ecommerce.routemisr.com/api/v1/cart',
    {productId:productId},
    {
        headers ,
    }
    
    ).then(res => res).catch(err =>err)
}


function getCart(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart',
     
     {
         headers,
        }
     
     ).then(res => res).catch(err =>err)
 }
 
 function updateCart(id , count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{count},
     
     {
         headers,
        }
     
     ).then(res => res).catch(err =>err)
 }

 function deleteitem(id){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
     
     {
         headers,
        }
     
     ).then(res => res).catch(err =>err)
 }

 function clearData(){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
     
     {
         headers,
        }
     
     ).then(res => res).catch(err =>err)
 }

 async function generatePayOnline(cartId ,shippingAddress){
    
    return await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
    {shippingAddress:shippingAddress},
     
     {
         headers,
        }
     
     ).then(res => res).catch(err =>err)
 }



   return <CartContext.Provider value={{setCartId,setNumOfCartItems,numOfCartItems,cartId,cart , creatCart ,getCart ,updateCart ,deleteitem ,clearData,generatePayOnline}}>

{props.children}
   </CartContext.Provider> 



}
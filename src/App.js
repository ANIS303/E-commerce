import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Layout from './components/Layout/Layout';
import Notfound from './components/Notfound/Notfound';
import Gategories from './components/Gategories/Gategories';
import Brands from './components/Brands/Brands';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode'
import ProtactedRoutes from './components/protactedRoutes/protactedRoutes';
import DetailsProducts from './components/Details-Products/Details-Products';
import CounterContextProvider from './Context/CounterContext';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext';
import BrandsDEtails from './components/BrandsDEtails/BrandsDEtails';
import ForgetPassword from './components/Forget-Password/Forget-Password';
import  { Toaster } from 'react-hot-toast';
import Checkpay from './components/Checkpay/Checkpay';
import Allorders from './components/Allorders/Allorders';
import Resetpassword from './components/Resetpassword/Resetpassword';
import Loading from './components/Loading/Loading';
import Wishlist from './components/wishlist/wishlist';
import WishContextProvider from './Context/WishContext';



export default function App() {

  const [userData,setuserData]=useState(null)

  useEffect(()=>{
    if(localStorage.getItem("userInfo")){
      saviingAcount()
    }

  },[])

  function saviingAcount(){
    let ecodeToken = localStorage.getItem("userInfo")
    let decoded = jwtDecode(ecodeToken);
    setuserData(decoded)
  }


  let routeres = createBrowserRouter([
    {path:'' , element:<Layout userData={userData} setuserData={setuserData}/> , children:[
      {index: 'HOME' , element:<ProtactedRoutes><Home/></ProtactedRoutes>},
      {path: 'LOGIN' , element:<Login saviingAcount={saviingAcount}/>},
      {path: 'REGISTER' , element:<Register/>},
      {path: 'GATEGORIES' , element:<ProtactedRoutes> <Gategories/></ProtactedRoutes>},
      {path: 'CART' , element: <ProtactedRoutes><Cart/></ProtactedRoutes>},
      {path: 'BRANDS', element: <ProtactedRoutes><Brands/></ProtactedRoutes>},
      {path: 'BRAND-DETAILS/:id', element: <ProtactedRoutes><BrandsDEtails/></ProtactedRoutes>},
      {path: 'Forget-Password', element: <ForgetPassword/>},
      {path: 'Check-Payment', element: <ProtactedRoutes><Checkpay/></ProtactedRoutes>},
      {path: 'allorders', element: <ProtactedRoutes><Allorders userData={userData}/></ProtactedRoutes>},
      {path: 'Reset-Password', element: <Resetpassword/>},
      {path: 'DETAILS-PRODUCT/:id', element: <ProtactedRoutes><DetailsProducts/></ProtactedRoutes>},
      {path: 'loader', element: <ProtactedRoutes><Loading/></ProtactedRoutes>},
      {path: 'Wishlist', element: <ProtactedRoutes><Wishlist/></ProtactedRoutes>},
{path:'ANIS-E-commerce' , element:<ProtactedRoutes><Login/></ProtactedRoutes>},
  {path: "*", element :<Notfound/>},
  
    ]},
  ]);
  
  


  return <>
  <CartContextProvider>
  <Toaster></Toaster>
    <WishContextProvider>
  <CounterContextProvider>
   
   <RouterProvider router={routeres}></RouterProvider>

  </CounterContextProvider>
  </WishContextProvider>
  </CartContextProvider>
  </>
}



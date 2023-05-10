import React from 'react';
import {  Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export default function Layout(userData,setuserData) {

  let navigate=useNavigate()

function logOut(){
  localStorage.removeItem("userInfo")
  setuserData(null)
  navigate("/LOGIN")
}


  return (
  <>
  <Navbar userData={userData} logOut={logOut}/>

<Outlet></Outlet>

  <Footer/>
  </>
  )
}

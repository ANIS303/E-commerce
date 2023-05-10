import {useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import {  Link, useNavigate} from 'react-router-dom'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';



export default function Login({saviingAcount}) {


  const[isloading,setIsLoading] = useState(false)
  const[errorMes,setErrorMes] = useState(null)
  
  let navigate= useNavigate()
  
   async function login(values){
      setIsLoading(true)
      setErrorMes(null)
      let {data}=await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values).catch((err)=>{

        setIsLoading(false)
  
        setErrorMes(err.response.data.message)
      });

  
  
  
  if(data.message === "success"){
  
  setIsLoading(false)
  localStorage.setItem("userInfo",data.token)
  saviingAcount()

  navigate("/")
  
  }
  
    }
  
  
  
  let myScema=Yup.object({
    email:Yup.string().email("invalid email").required("Required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"invalid passowrd").required("password is Required"),
   

  })
  
  let formik = useFormik({
    initialValues:{
      "email":"",
      "password":"",
    },
    validationSchema:myScema,
    onSubmit:(values)=>login(values)
  
  })
  


  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>LOG IN </title>
            </Helmet>


    <div className="container my-5">

<div className="w-75 mx-auto">
<h3>Login Now :</h3>

{errorMes ? <div className='alert alert-danger'>{errorMes}</div> :''}

<form onSubmit={formik.handleSubmit} >


<label htmlFor="email">EMAIL</label>
<input type="email" id='email' className=' form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />

{formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div>: ''}

<label htmlFor="password">Password</label>
<input type="password" id='password' className=' form-control mb-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

{formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div>: ''}


{isloading ?<button className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white'>Login</button>}

</form>
<p className='py-3'>
  <Link className=' text-info' to={'/Forget-Password'}>Forget Password!?</Link>
</p>
</div>


    </div>
    
  

    
    </>
  )
}

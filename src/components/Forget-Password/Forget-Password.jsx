import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function ForgetPassword() {
const [codeVrify,setCodeVrify] = useState(true)

const [errorMsg,setError] = useState("")

let Navigate = useNavigate()


 let validationSchema1 = Yup.object({
  email:Yup.string().email("invalid email").required("Required"),
 })
 let validationSchema2 = Yup.object({
  resetCode:Yup.string()
 })


 let form1 = useFormik({

  initialValues:{
    email:''
  },
  validationSchema:validationSchema1,
  onSubmit:(val)=>{
    console.log(val);
    resetCodes(val)
  },

 })

 let form2 = useFormik({

  initialValues:{
    resetCode:''
  },
   validationSchema:validationSchema2,
  onSubmit:(val)=>{
    console.log(val);
    forgetPassApi(val)

  },
 })


 async function resetCodes(valuies){
  let {data} = await axios.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/forgotPasswords`,valuies)
  if(data.statusMsg === "success"){
    setCodeVrify(false)
  }
}


async function forgetPassApi(valuies){
  let {data} = await axios.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/verifyResetCode`,valuies)
  .catch((error)=>{
     setError(error.response.data.message)
  })
   if(data?.status === "Success"){
  
    Navigate("/Reset-Password")
   }
}


  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Forget Password </title>
            </Helmet>

    <div className="container">

    {codeVrify? <form onSubmit={form1.handleSubmit}>
    <h1 className=' py-5'>Enter Your Email</h1>

      <label htmlFor="email">EMAIL</label>
<input type="email" id='email' className=' form-control mb-2' name='email' value={form1.values.email} onChange={form1.handleChange} />
<p className=' badge text-bg-light'>{form1.errors.email}</p>
<button type="submit" className='btn btn-outline-secondary' disabled={!(form1.isValid && form1.dirty)}> verifying email</button>
      </form>: 
      <form onSubmit={form2.handleSubmit}>
        <h1 className=' py-5'>Enter Your Code</h1>
<label htmlFor="resetCode">verifying Code</label>
<input type="text" id='resetCode' className=' form-control mb-2' name='resetCode'  onChange={form2.handleChange} />
 {errorMsg!==" "? <p className='alert-danger'>{errorMsg}</p>:" "} 
<button type="submit" className='btn btn-outline-warning my-4' disabled={!(form2.isValid && form2.dirty)}> verifying </button>
</form>}


    </div>
    
    
    
    </>
  )
}
//
import React, { useState } from 'react'
import styles from './Register.module.css'
import {  useFormik} from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'
import { Helmet } from 'react-helmet';




export default function Register() {
const[isloading,setIsLoading] = useState(false)
const[errorMes,setErrorMes] = useState(null)

let navigate= useNavigate()




 async function register(values){
    console.log("battttt7", values);
    setIsLoading(true)
    setErrorMes(null)
    let {data}=await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',values).catch((err)=>{
      setIsLoading(false)

      setErrorMes(err.response.data.message)
    });



if(data.message === "success"){

setIsLoading(false)
navigate("/login")

}

  }


// function validate (values){
//   let errors ={};

//   if(!values.name){
// errors.name="Required"
//   }else if (values.name.length < 3){
//     errors.name= "Must be more then 5 character"

//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
    
//       if(!values.password){
//         errors.password="Required"
//           }else if (!/^[A-Z][a-z0-9]{4,9}$/i.test(values.password)){
//             errors.password = 'Invalid password';
        
//           }
        
//           if(!values.rePassword){
//             errors.rePassword="Required"
//               }else if (values.rePassword != values.password){
//                 errors.rePassword= 'password and repassword mots be matched';
            
//               }
            
//               if(!values.phone){
//                 errors.phone="Required"
//                   }else if (!/^01[0125][0-9]{8}$/i.test(values.phone)){
//                     errors.phone= 'Invalid phone';
                
//                   }
//     return errors;
    

// }



let myScema=Yup.object({
  name: Yup.string().required("name is Required").min(3,"min character is 3").max(15,"max character is 15"),
  email:Yup.string().email("invalid email").required("Required"),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"invalid passowrd").required("password is Required"),
  rePassword:Yup.string().oneOf([Yup.ref('password')], "Repassword most be matched").required("password is Required"),
  phone:Yup.string().required("phone is Required").matches(/^01[0125][0-9]{8}$/,"invalid phone")
})

let formik = useFormik({
  initialValues:{
    "name": "",
    "email":"",
    "password":"",
    "rePassword":"",
    "phone":""
  },
  validationSchema:myScema,
  onSubmit:(values)=>register(values)

})




  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Register </title>
            </Helmet>

    <div className="container my-5">

<div className="w-75 mx-auto">
<h3>Register Now :</h3>

{errorMes ? <div className='alert alert-danger'>{errorMes}</div> :''}

<form onSubmit={formik.handleSubmit} >

<label htmlFor="name">NAME</label>
<input type="text" className=' form-control mb-2' id='name' name='name' value={formik.values.name} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>


{formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div>: ''}


<label htmlFor="email">EMAIL</label>
<input type="email" id='email' className=' form-control mb-2' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />

{formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div>: ''}

<label htmlFor="password">Password</label>
<input type="password" id='password' className=' form-control mb-2' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

{formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div>: ''}

<label htmlFor="rePassword">rePassword</label>
<input type="password" id='rePassword' className=' form-control mb-2' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />

{formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div>: ''}

<label htmlFor="phone">phone</label>
<input type="tel" id='phone' className=' form-control mb-2' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>

{formik.errors.phone && formik.touched.phone? <div className="alert alert-danger">{formik.errors.phone}</div>: ''}

{isloading ?<button className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white'>Register</button>}

</form>

</div>

    </div>
    
    </>
  )
}

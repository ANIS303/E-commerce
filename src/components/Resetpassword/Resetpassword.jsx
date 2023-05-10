import React ,{ useState } from 'react'
import styles from './Resetpassword.module.css'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Resetpassword() {

  const[isloading,setIsLoading] = useState(false)

  const [codeVrify,setCodeVrify] = useState(true)
const [errorMsg,setError] = useState("")

let Navigate = useNavigate()


 let validationSchema2 = Yup.object({
  email:Yup.string().email("invalid email").required("Required"),
  newPassword:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"invalid passowrd").required("password is Required"),



 })



 let form2 = useFormik({

  initialValues:{
    email:'',
    newPassword:''
  },
 
  validationSchema:validationSchema2,
  onSubmit:(val)=>{
    resetPass(val)

    
  },
 })




async function resetPass(valuies){
  setIsLoading(true)

  let {data} = await axios.put(`https://route-ecommerce-app.vercel.app/api/v1/auth/resetPassword`,valuies)


   
    setIsLoading(true)
 
 
  if(data.token ){
    setIsLoading(false)
    Navigate("/LOGIN")
  }
}

  return (
    <>
    <div className="container py-5">

   
    <form onSubmit={form2.handleSubmit} >


<label htmlFor="email">EMAIL</label>
<input type="email" id='email' className=' form-control mb-2' name='email' value={form2.values.email} onChange={form2.handleChange} onBlur={form2.handleBlur} />

{form2.errors.email && form2.touched.email ? <div className="alert alert-danger">{form2.errors.email}</div>: ''}

<label htmlFor="newPassword">new Password</label>
<input type="password" id='newPassword' className=' form-control mb-2' name='newPassword' value={form2.values.newPassword} onChange={form2.handleChange} onBlur={form2.handleBlur}/>

{form2.errors.newPassword && form2.touched.newPassword ? <div className="alert alert-danger">{form2.errors.newPassword}</div>: ''}


{isloading ?<button className='btn bg-main text-white'><i className='fa fa-spin fa-spinner'></i></button> : <button disabled={!(form2.isValid && form2.dirty)} className='btn bg-main text-white'>conferm</button>}

</form>


    </div>
    
    
    
    </>
  )
}

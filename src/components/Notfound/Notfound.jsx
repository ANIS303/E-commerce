import React from 'react'
import styles from './Notfound.module.css'
import error from '../../assest/images/404.png'
export default function Notfound() {
  return (
    <>
    <div className="container">
      <div className="w-50 mx-auto my-5">
<img src={error} className='w-100' alt="" />
      </div>
    </div>
    </>
  )
}

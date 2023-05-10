import React from 'react'
import styles from './Loading.module.css'



export default function Loading() {



  return (
    <>
    <div className="container d-flex justify-content-center py-5 my-5">
    <div class={styles.loader}>
      <span class={styles.loadertext}>loading</span>
        <span class={styles.load}></span>
    </div>

    </div>
  </>
  )
}

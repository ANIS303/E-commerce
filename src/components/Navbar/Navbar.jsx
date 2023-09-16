import logo from '../../assest/images/e-commerce-store-digital-cloud-shopping-vector-11695082-removebg-preview.png'

import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Navbar.module.css'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'



export default function Navbar({userdata, logOut}) {
  let userToken = localStorage.getItem("userInfo")
  

  let{numOfCartItems}= useContext(CartContext)
  
  return (




    <>
       <nav className="navbar navbar-expand-lg navbg fixed-top   navbar-dark .navbar-nav-scroll  ">
  <div className="container-fluid mx-3 px-5 py-1">
    <Link className="navbar-brand " to="">
    <img src={logo} width={80} alt="" /> </Link>
    <Link className=" h6 pe-4" to="">Shopping Now</Link>
    <i className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"><FontAwesomeIcon icon="fa-solid fa-bars text-white" /></span>
    </i>
    <div className="collapse navbar-collapse" id="navbarNav">
{userToken && <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link px-2"  to="">Home
         </NavLink>
        </li>
        
        <li className="nav-item px-2">
          <NavLink className="nav-link " to="GATEGORIES">Gategories</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link px-2" to="BRANDS">Brands</NavLink>
        </li>

      </ul>}

            <ul className="navbar-nav ms-auto">
        <li className="nav-item d-flex justify-content-between w-25 me-5">
          <a className="nav-link " target='blank' href="https://www.facebook.com"><i className=' fa-brands fa-facebook-f'></i></a>
          <a className="nav-link " target='blank' href="https://www.gmail.com"><i className=' fa-brands fa-google'></i></a>
          <a className="nav-link " target='blank' href="https://www.instagram.com"><i className=' fa-brands fa-instagram'></i></a>
          <a className="nav-link " target='blank' href="https://www.twitter.com"><i className=' fa-brands fa-twitter'></i></a>

        </li>
        {userToken ? <>
        <div className="nav-item ">
        <li className="nav-item position-relative ">
        
          <Link className="nav-link " to="CART"><i className=' fa fa-cart-shopping fa-2xl '>
</i><Link className=' badge bg-main position-absolute top-0 end-0'>{numOfCartItems}</Link>
          </Link>
         
        </li> </div>  <li className="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear fa-spin fa-xl ms-3">{userdata?.name} </i> </Link>
  <ul class="dropdown-menu dropdown-menu-dark">
  <Link className="dropdown-item " to="/Cart"> CART</Link> 
  <Link className="dropdown-item " to="/Wishlist"> Wish list</Link> 
  <Link className="dropdown-item " to="/Allorders"> All Order</Link> 

        <Link className="dropdown-item " to="/Forget-Password"> Forget Password</Link> 
        <li><hr class="dropdown-divider"/></li>
        <Link className="dropdown-item " onClick={()=>logOut()}> Logout</Link> 

          </ul>
          </li>
</> : 
        <>
        <li className="nav-item px-3">
          <NavLink className="nav-link " to="LOGIN">signin</NavLink>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link " to="REGISTER">Resister</NavLink>
        </li>
        </> }



      </ul>

    </div>
  </div>
</nav>

    </>
  )
}

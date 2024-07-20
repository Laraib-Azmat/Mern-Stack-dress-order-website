import React from 'react';
import './Navbar.css';
import navLogo from '../../assets/logo.png';
import image from '../../assets/p1_product_i4.png'

const Navbar = () => {
  return (
    <div className='navbar'>

       <div className="nav-left">
       <img src={navLogo} alt="Logo" className="nav-logo" />
       <h3>TrendyAdmin</h3>
       </div>

        <img src={image} alt="" className="nav-profile" />

    </div>
  )
}

export default Navbar
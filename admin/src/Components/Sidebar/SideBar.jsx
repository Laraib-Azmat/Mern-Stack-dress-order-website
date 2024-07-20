import React from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom';
import cartIcon from'../../assets/cartIcon.gif'
import listIcon from'../../assets/ListIcon.gif'

const SideBar = () => {
  return (
    <div className='sidebar'>

    <Link to={'/addproduct'} style={{textDecoration:'none'}}>

        <div className="sidebar-item">
           <img src={cartIcon} alt="cart icon" />
            <p>Add Product</p>
        </div>
    </Link>   

    <Link to={'/listproduct'} style={{textDecoration:'none'}}>

        <div className="sidebar-item">
           <img src={listIcon} alt="cart icon" />
            <p>Product List</p>
        </div>
    </Link>   

  
 
    </div>
  )
}

export default SideBar;
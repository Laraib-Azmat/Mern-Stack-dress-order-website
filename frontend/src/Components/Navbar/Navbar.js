import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faBars} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';

export const Navbar = () => {

   const [menu, setMenu]=useState('shop');
   const {getTotalCartItems, token, setToken} = useContext(ShopContext);
   const [isHighlight, setHighlight] = useState(false);
   const menuRef = useRef();

   const showNavBar = ()=>{
    menuRef.current.classList.toggle(styles.responsiveNav)
   }

   useEffect(()=>{
  if(getTotalCartItems()===0){
    return;
  }

  setHighlight(true);

  const timer = setTimeout(() => {
    setHighlight(false);
  }, 300);

  return () => {
    clearTimeout(timer);
  }
   },[getTotalCartItems()])

  return (
    <motion.div
           initial={ {opacity:0, x:-100}} 
           animate={ {opacity:1, x:0}}
           transition={{type:'spring', stiffness:100,damping:10,delay:0.4}}
    className={styles.navbar}>

<div className={styles['nav-logo']}>
    <img src={logo} alt="logo" />
    <p>TrendyWear</p>
</div>

<ul ref={menuRef} className={styles['nav-menu']}>
    <li onClick={()=>{setMenu("shop");showNavBar()}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("men");showNavBar()}}><Link style={{textDecoration:'none'}} to='mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("women");showNavBar()}}><Link style={{textDecoration:'none'}} to='womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids");showNavBar()}}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    <button className={`${styles.navBarBtn} ${styles.navBarClose}`} onClick={showNavBar}><FontAwesomeIcon icon={faXmark} /></button>
</ul>
 

<div className={styles.rightBar}>
<div className={styles['nav-login-cart']}>
  {token ? <button onClick={()=>{localStorage.removeItem("token");window.location.replace("/");setToken("")}}>Logout</button> :
<Link to='/login'><button>Login</button></Link>}
<Link to='/cart'><img className={isHighlight?styles.bump:""} src={cartIcon} alt="cart-icon" /></Link>
<div className={`${styles['nav-cart-count']} ${isHighlight?styles.bump:""}`}>{getTotalCartItems()}</div>

</div>
 <button className={styles.navBarBtn} onClick={showNavBar}><FontAwesomeIcon icon={faBars} /></button>

</div>
    </motion.div>
  )
}

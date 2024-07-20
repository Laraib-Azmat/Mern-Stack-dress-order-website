import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDisplay.module.css'
import starIcon from '../../Assets/star_icon.png'
import starDullIcon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'
import { motion } from 'framer-motion'


export const ProductDisplay = (props) => {
    const {addToCart}=useContext(ShopContext);
    const {product}=props;
    const [Size, setSize] = useState('S')
   

  return (
    <div className={styles.productdisplay}>
        
        <div className={styles['productdisplay-left']}>
            <div className={styles['productdisplay-img-list']}>
            
                <img src={product.subImages[0]}/>
                <img src={product.subImages[1]?product.subImages[1]:product.subImages[0]}/>
                <img src={product.subImages[2]?product.subImages[2]:product.subImages[0]}/>
                <img src={product.subImages[3]?product.subImages[2]:product.subImages[0]}/>
            </div>
            <div className={styles['productdisplay-img']}>
            <motion.img
            initial={{opacity:0, scale:2 }}
            animate={{opacity:1,scale:1}}
            transition={
              {type:'spring',  damping:10, stiffness:120}
             }
            className={styles['productdisplay-main-img']} src={product.image}/>
        </div>
        </div>

        <div className={styles['productdisplay-right']}>
            <motion.h1
             initial={{ opacity: 0, y: -50 }}
             animate={{opacity:1,y:0}}
             transition={
               {type:'spring', delay:0.4, damping:10, stiffness:120}
              }
            >{product.name}</motion.h1>
            <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{opacity:1,x:0}}
             transition={
               {type:'spring', delay:0.4, damping:10, stiffness:120}
              }
            className={styles['productdisplay-right-star']}>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starDullIcon}/>
                <p>(122)</p>
                </motion.div>
        <div className={styles['productdisplay-right-prices']}>
            <div className={styles['productdisplay-right-price-old']}>
                ${product.old_Price}
            </div>
            <div className={styles['productdisplay-right-price-new']}>
                ${product.new_Price}
            </div>

        </div>
        <div className={styles['productdisplay-right-description']}>
           {product.description}
        </div>
        <div className={styles['productdisplay-right-size']}>
            <h1>Select Size</h1>
            <div className={styles['productdisplay-right-sizes']}>
               {product.sizes.map((size,i)=>{
                return <div key={i} onClick={()=>setSize(size)} style={size===Size?{background:'#E9A89B'}:{background:'white'}}> {size} </div>
               })}
            </div>
            
        </div>
        <motion.button 
        whileHover={{scale: 1.1, rotateX: 10, rotateY: -10 ,
            transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}}
        onClick={()=>{addToCart(product.id,Size)}}>ADD TO CART</motion.button>
        <p className={styles['productdisplay-right-category']}>
            <span>{product.category} :</span>{product.category}, {product.name}
        </p>
        <p className={styles['productdisplay-right-category']}>
            <span>Tags :</span>Modern Latest</p>
    </div>

    </div>
  )
}

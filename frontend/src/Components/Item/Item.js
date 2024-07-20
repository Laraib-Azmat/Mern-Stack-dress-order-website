import React from 'react'
import styles from './Item.module.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Item = (props) => {


  return (
    <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{opacity:1,y:0}}
    transition={
      {type:'spring', delay:0.3, damping:10, stiffness:120}
     }
    className={styles.item}>
        <Link to={`/product/${props.id}`}><motion.img  
        whileHover={{scale:1.1}} 
        whileTap={{scale:4}} 
        onClick={window.scrollTo(0,0)} src={props.image}/>
        </Link>
        <p>{props.name}</p>
        <div className={styles['item-prices']}>
          <div className={styles['item-price-new']}>
          ${props.new_price}
          </div>
          <div className={styles['item-price-old']}>
          ${props.old_price}
          </div>
        </div>
    </motion.div>
  )
}

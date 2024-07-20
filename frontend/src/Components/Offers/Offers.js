import React from 'react'
import styles from './Offers.module.css'
import { delay, motion } from 'framer-motion'

import exclusiveImage from '../../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className={styles.offers}>
        <div  className={styles['offers-left']}>
            <motion.h1 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1,y:0}}
            transition={
             {type:'spring', delay:0.2, damping:10, stiffness:100}
            }
            >Exclusive</motion.h1>
            <motion.h1
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1,y:0}}
            transition={
             {type:'spring', delay:0.4, damping:10, stiffness:100}
            }
            >Offers for You</motion.h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <motion.button
            initial={{opacity:0, y:-100}}
            whileInView={{opacity:1,y:0}}
            transition={
             {type:'spring', delay:0.6, damping:10, stiffness:100}
            }
            whileHover={{scale: 1.1, rotateX: 10, rotateY: -10 ,
               transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}}
            >Check Now</motion.button>
        </div>

        <motion.div
        initial={{opacity:0, scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={
         {type:'spring', delay:0.8, damping:10, stiffness:100}
        }
        className={styles['offers-right']}>
                <img src={exclusiveImage}/>
        </motion.div>
    </div>
  )
}

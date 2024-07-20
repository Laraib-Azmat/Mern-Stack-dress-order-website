import React from 'react'
import styles from './NewsLetter.module.css'
import { motion } from 'framer-motion'

export const NewsLetter = () => {
  return (
    <div className={styles.newsletter}>
      <motion.h1
      initial={{ opacity: 0, y: 30 }}
      whileInView={{opacity:1,y:0}}
      transition={
        {type:'spring', delay:0.2, damping:10, stiffness:120}
       }
      >Get Exclusive Offers On Your Email</motion.h1>
      <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{opacity:1,y:0}}
      transition={
        {type:'spring', delay:0.4, damping:10, stiffness:120}
       }
      >Subscribe to pur newsletter and stay updated</motion.p>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{opacity:1,y:0}}
      transition={
        {type:'spring', delay:0.6, damping:10, stiffness:120}
       }
      >
        <input type='email' placeholder='Your Email id'/>
        <button>Subscribe</button>
      </motion.div>
    </div>
  )
}

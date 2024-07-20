import React from 'react'
import styles from './DescriptionBox.module.css'
import { motion } from 'framer-motion'

export const DescriptionBox = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity:1,y:0}}
    transition={
      {type:'spring', delay:0.2, damping:10, stiffness:100}
     }
    className={styles.DescriptionBox}>
            <div className={styles['descriptionbix-navigator']}>
                <div className={styles['descriptionbox-nav-box']}>Description</div>
                <div className={styles['fade']}>Reviews (122)</div>
            </div>

         <div className={styles['descriptionbox-description']}>
            <p>An e-commerce website is an online platform that facilitae.... Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima repudiandae eveniet tempore provident temporibus accusantium quia dolore! Deserunt nam voluptatibus molestiae nemo soluta tempore iure rerum! Quo temporibus magni officia.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi sed pariatur, nisi quis, sapiente aspernatur ea repudiandae magni, cum voluptas inventore. Itaque commodi fuga enim reprehenderit tempora. Nesciunt, nulla similique!
            </p>
            </div>   
    </motion.div>
  )
}

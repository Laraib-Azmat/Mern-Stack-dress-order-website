import React from 'react'
import styles from './RelatedProducts.module.css'
import data_product from '../../Assets/data'
import { Item } from '../Item/Item'
import { motion } from 'framer-motion'

export const RelatedProducts = () => {
  return (
    <div className={styles.RelatedProducts}>
        <motion.h1
         initial={{ opacity: 0, y: 50 }}
         whileInView={{opacity:1,y:0}}
         transition={
           {type:'spring', delay:0.2, damping:10, stiffness:100}
          }
        >Related Products</motion.h1>
        <hr />
        <div className={styles['relatedProducts-item']}>
            {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> 
            }

            )}
        </div>
    </div>
  )
}

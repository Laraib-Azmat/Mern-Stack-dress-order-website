import React, { useContext } from 'react'
import styles from './RelatedProducts.module.css'
import { Item } from '../Item/Item'
import { motion } from 'framer-motion'
import { ShopContext } from '../Context/ShopContext'

export const RelatedProducts = ({product}) => {

  const {allProducts} = useContext(ShopContext);
  const related_product = allProducts.filter(i => i.category === product.category);
  const data_product = related_product.slice(3, 7);

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
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_Price} old_price={item.old_Price} /> 
            }

            )}
        </div>
    </div>
  )
}

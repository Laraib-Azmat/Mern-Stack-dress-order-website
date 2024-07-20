import React, { useContext } from 'react'
import styles from './ShopCategory.module.css'
import dropdownIcon from '../../Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Item/Item';
import { motion } from 'framer-motion';

export const ShopCategory = (props) => {

  const contextValue= useContext(ShopContext);

  return (
    <div className={styles['shop-category']}>
       <motion.img
        initial={{ opacity: 0, scale:0 }}
        animate={{opacity:1,scale:1}}
        transition={
          {type:'spring', delay:0.5, damping:10, stiffness:100}
         }
         whileHover={{scale:1.1, transition:{type:'spring', delay:0.1, stiffness:100, damping:10}}}
       className={styles['shopcategory-banner']} src={props.banner} />
       <div className={styles['shopcategory-indexSort']}>
        <p>
          <span>Showing 1-12</span> out of {contextValue.allProducts.length} products
        </p>
        <motion.div
         whileHover={{scale:1.1,rotateZ:-3, transition:{type:'spring', delay:0.1, stiffness:100, damping:10}}}
        className={styles['shopcategory-sort']}>
          Sort by <img src={dropdownIcon}/>
        </motion.div>  
       </div>
        <div className={styles['shopcategory-products']}>
          {contextValue.allProducts.map((item,i)=>{
            
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_Price} old_price={item.old_Price}  />
            }
            else{
              return null;
            }
          })}

        </div>

              <motion.div
               whileHover={{scale:1.1,rotateX:10, rotateY:10, transition:{type:'spring', delay:0.2, stiffness:100, damping:10}}}
              className={styles['shopcategory-loadmore']}>
                Explore more
              </motion.div>
    </div>
  )
}

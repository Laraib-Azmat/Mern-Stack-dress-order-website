import React, { useContext } from 'react'
import styles from './Popular.module.css'
import { motion} from 'framer-motion'
import { Item } from '../Item/Item'
import { ShopContext } from '../Context/ShopContext'

export const Popular = () => {

  const {allProducts} = useContext(ShopContext);
  const womenProducts = allProducts.filter(product => product.category === 'women');
  const dataProduct = womenProducts.slice(3, 7);

  return (
    <div className={styles.popular}>
        <motion.h1
        initial={ {opacity:0, y:100}} 
        animate={ {opacity:1, y:0}}
        transition={{type:'spring', stiffness:150,damping:10,delay:0.2}}
        >POPULAR IN WOMEN</motion.h1>
        <hr/>
        <div 
        viewport={{amount:0.8}}
        className={styles['popular-item']}>
            {
                dataProduct.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_Price} old_price={item.old_Price} />
                })
            }
        </div>
    </div>
  )
}

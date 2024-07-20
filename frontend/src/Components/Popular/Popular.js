import React from 'react'
import styles from './Popular.module.css'
import dataProduct from '../../Assets/data'
import { motion} from 'framer-motion'

import { Item } from '../Item/Item'

export const Popular = () => {



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
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}

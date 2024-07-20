import React, { useContext, useEffect, useState } from 'react'
import styles from './NewCollections.module.css'
import { Item } from '../Item/Item'
import { motion } from 'framer-motion'
import { ShopContext } from '../Context/ShopContext'

export const NewCollections = () => {

  const [newCollections, setNewCollection] = useState([]);
  const {url} = useContext(ShopContext)

  useEffect(()=>{
    fetch(url+"/product/newcollection")
    .then(res=>res.json())
    .then(data=>setNewCollection(data))
  },[])

  return (
    <div className={styles.newCollection}>
        <motion.h1
         initial={{opacity:0, y:100}}
         whileInView={{opacity:1,y:0}}
         transition={
          {type:'spring', delay:0.4, damping:10, stiffness:100}
         }
        >NEW COLLECTIONS</motion.h1>
        <hr/>
        <div 
        className={styles.collections}>
            {
                newCollections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_Price} old_price={item.old_Price} />
                } )
            }
        </div>
    </div>
  )
}

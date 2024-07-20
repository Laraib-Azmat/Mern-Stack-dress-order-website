import React, { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import handIcon from '../../Assets/hand_icon.png'
import arrowIcon from '../../Assets/arrow.png'
import heroImg1 from '../../Assets/heroImg1.png'
import heroImg2 from "../../Assets/heroImg2.png"
import heroImg3 from "../../Assets/heroImg3.png"
import heroImg4 from "../../Assets/heroImg4.png"
import {motion} from 'framer-motion'

export const Hero = () => {

  const images = [heroImg1, heroImg2,heroImg3, heroImg4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=>{

    const interval = setInterval(()=>{
      setCurrentImageIndex(prevIndex=>
        prevIndex === images.length-1 ? 0 : prevIndex +1
      );
    }, 3000)

    console.log(currentImageIndex)
return()=> clearInterval(interval)
  },[images])

  return (
    <div className={styles.hero}>
        <div className={styles['hero-left']}>
           
           <motion.h2  
           initial={ {opacity:0, y:-100}} 
           animate={ {opacity:1, y:0}}
           transition={{type:'spring', stiffness:100,damping:10,delay:0.4}}
           
           >NEW ARRIVALS ONLY</motion.h2>
           <div>
           <motion.div 
           initial={ {opacity:0, y:-100}} 
           animate={ {opacity:1, y:0}}
           transition={{type:'spring', stiffness:100,damping:10,delay:0.4}}
           className={styles['hero-hand-icon']}>
            <p>new</p>
            <img src={handIcon} />
           </motion.div>
           <motion.p 
           initial={ {opacity:0, y:-100}} 
           animate={ {opacity:1, y:0}}
           transition={{type:'spring', stiffness:100,damping:10,delay:0.6}}
           style={{color:'#912BBC'}}
           >collections</motion.p>
           <motion.p 
           initial={ {opacity:0, y:-100}} 
           animate={ {opacity:1, y:0}}
           transition={{type:'spring', stiffness:100,damping:10,delay:0.8}}
           >for everyone</motion.p>
        </div>
        <motion.button 
        initial={ {opacity:0, y:100}} 
        whileInView={ {opacity:1, y:0}}
        transition={{type:'spring', stiffness:100,damping:10,delay:1}}
        whileHover={{scale: 1.1, rotateX: 10, rotateY: -10 ,
          transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}}
        className={styles['hero-latest-btn']}>
              <div>Latest Collection</div>
              <img src={arrowIcon} />
        </motion.button>

        </div>

        <motion.div 
        initial={ {opacity:0, scale:0}} 
        animate={ {opacity:1, scale:1}}
        transition={{type:'spring', stiffness:100,damping:10,delay:0.6}}
        className={styles['hero-right']}>

            <img src={images[currentImageIndex]}/>

            <div
            className={styles.backRing}
            ></div>

        </motion.div>
    </div>
  )
}

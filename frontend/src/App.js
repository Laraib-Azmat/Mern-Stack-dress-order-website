
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/Shop';
import { ShopCategory } from './Components/Pages/ShopCategory';
import { Product } from './Components/Pages/Product';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

import menBanner from './Assets/banner_mens.png';
import womenBanner from './Assets/banner_women.png';
import kidBanner from './Assets/banner_kids.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp} from '@fortawesome/free-solid-svg-icons'


function App() {


  let lastScrollY = window.scrollY;
  const [showButton, setShowButton] = useState(false);

 

     const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
          setShowButton(false);
          lastScrollY = window.scrollY;
        } 
        else if(window.scrollY<10){
          setShowButton(false)
        }        
        else {
          setShowButton(true);
        }
        
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={menBanner} category="men" />} />
      <Route path='/womens' element={<ShopCategory banner={womenBanner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kidBanner} category="kid" />} />
      <Route path='/product' element={<Product/>} >
        <Route path=':productId' element={<Product
        />} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
    </Routes>
    <Footer/>

    {showButton && 
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{scale:1.1}}
         className="sideBtn"
         onClick={scrollToTop}>

      <FontAwesomeIcon beat icon={faArrowUp} />
                    
         </motion.div>
}

    </BrowserRouter>
  );
}

export default App;

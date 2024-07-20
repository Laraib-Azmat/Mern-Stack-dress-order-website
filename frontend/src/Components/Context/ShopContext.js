import React, { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null);

    const url = "http://localhost:4000";

const ShopContextProvider=(props)=>{

    const [allProducts, setAllProduct] = useState([]);
    const [cartItem, setCartItem] = useState([]);

    useEffect(()=>{
        fetch(url+"/product/listproduct")
        .then(res=>res.json())
        .then(data=>setAllProduct(data))
    },[])

  

    const addToCart = async (ItemId,Size)=>{
        setCartItem((prev)=>({...prev, [ItemId]:prev[ItemId]+1}))

    }

  
    const removeToCart = (ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]:prev[ItemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItem){
           
            if(cartItem[item]>0){
                let itemInfo = allProducts.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
               
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItem){
           
            if(cartItem[item]>0){
              
                totalItem += cartItem[item] ;
               
            }
            
        }
        return totalItem;
    }

    const contextValue={getTotalCartAmount,getTotalCartItems,allProducts, cartItem, addToCart,removeToCart, url};
    return(
        <ShopContext.Provider value={contextValue}>
                    {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
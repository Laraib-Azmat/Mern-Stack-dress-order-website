import React, { createContext, useEffect, useState } from 'react'


export const ShopContext = createContext(null);

    const url = "http://localhost:4000";

const ShopContextProvider=(props)=>{

    const [allProducts, setAllProduct] = useState([]);
    const [cartItem, setCartItem] = useState([]);
    const [token, setToken] = useState("");

    const fetchCart = async ()=>{
        await fetch(url+"/cart/list",{
            method:"POST",
            headers:{
                Accept:"application/form-data",
                token:localStorage.getItem("token")
              },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                setCartItem(data.cartData)
            }else{
                alert(data.message)
            }}
        )
    }

    useEffect(()=>{
        fetch(url+"/product/listproduct")
        .then(res=>res.json())
        .then(data=>setAllProduct(data))

        setToken(localStorage.getItem("token"))
        if(localStorage.getItem("token")){
            fetchCart()
        }else{
            alert("Login yourself")
        }
    },[])

  

    const addToCart = async (item)=>{
      await fetch(url+"/cart/add", {
        method:"POST",
        headers:{
            Accept:"application/form-data",
            "Content-Type":"application/json",
            token:token
          },
          body: JSON.stringify(item)
       }).then(res=>res.json())
       .then(data=>{alert(data.message)})
       await fetchCart()
    }

  
    const removeToCart = async (ItemId)=>{
        await fetch(url+"/cart/remove", {
            method:"POST",
            headers:{
                Accept:"application/form-data",
                "Content-Type":"application/json",
                token:token
              },
              body: JSON.stringify({id:ItemId})
           }).then(res=>res.json())
           .then(data=>{console.log(data.message)})
           await fetchCart()
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItem){
          
          totalAmount+=cartItem[item].price
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = cartItem.length;

        return totalItem;
    }

    const contextValue={getTotalCartAmount,getTotalCartItems,allProducts, cartItem, addToCart,removeToCart, url, token, setToken};
    return(
        <ShopContext.Provider value={contextValue}>
                    {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
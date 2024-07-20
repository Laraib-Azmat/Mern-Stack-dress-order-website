import React, { useContext } from 'react';
import styles from './CartItem.module.css'
import { ShopContext } from '../Context/ShopContext';
import removeIcon from '../../Assets/cart_cross_icon.png'

export const CartItems = () => {

    const {getTotalCartAmount,allProducts,cartItem, addToCart, removeToCart}= useContext(ShopContext);

  return (
    <div className={styles.CartItems}>
        <div className={styles['cartitems-format-main']}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
         <p>Remove</p>
    </div>
    <hr/>
  {
    allProducts.map((e)=>{
        if(cartItem[e.id]>0){
            return  <div key={e.id}>
            <div className={`${styles['cartitem-format']} ${styles['cartitems-format-main']}`}>
                <img src={e.image} className={styles['carticon-product-icon']} />
                <p>{e.name}</p>
                <p>${e.new_Price}</p>
                <button className={styles['cartitem-quantity']}>{cartItem[e.id]}</button>
                <p>${e.new_Price*cartItem[e.id]}</p>
                <img className={styles['cartitem-remove-icon']} src={removeIcon} onClick={()=>{removeToCart(e.id)}} />
            </div>
            <hr/>
         </div>
        }
        return null;
    })
  }
  <div className={styles['cartitem-down']}>
    <div className={styles['cartitem-total']}>
        <h1>Cart Totals</h1>
        <div>
            <div className={styles['cartitem-total-item']}>
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className={styles['cartitem-total-item']}>
                <p>Shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className={styles['cartitem-total-item']}>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
          <button>PROCEED TO CHECKOUT</button>
    </div>
            <div className={styles['cartitem-promocode']}>
                    <p>If You have a promo code, Enter it here</p>
                    <div className={styles['cartitem-promobox']}>
                        <input type='text' placeholder='promo code' />
                        <button>Submit</button>
                    </div>
            </div>
  </div>
    </div>
  )
}

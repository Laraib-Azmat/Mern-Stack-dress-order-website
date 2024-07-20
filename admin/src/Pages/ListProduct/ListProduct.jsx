import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const ListProduct = ({url}) => {

    const [allprducts, setAllproducts] = useState([])

    const fetchInfo = async ()=>{
      await fetch(url+"/product/listproduct")
      .then((res)=>res.json())
      .then((data)=>{
        setAllproducts(data);
      })
    }

    useEffect(()=>{
      fetchInfo();
    },[])

    const removeProduct = async (id)=>{
      await fetch(url+"/product/removeproduct",{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':"application/json"
        },
        body:JSON.stringify({id:id})
      })

      await fetchInfo()
    }

  return (
    <div className='list-product'>
      
      <h1>All Products List</h1>

      <div className="list-product-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old_price</p>
        <p>New_price</p>
        <p>Category</p>
        <p>Remove</p>
        <p>Available</p>
      </div>
      
      <div className="listproduct-allProduct">
        <hr />
        {allprducts.map((product, index)=>{

            return <div key={index}>
            <div  className="list-product-format-main list-product-format">
   
<img src={product.image} alt="" className="listproduct-product-img" />
<p>{product.name}</p>
<p>${product.old_Price}</p>
<p>${product.new_Price}</p>
<p>{product.category}</p>
<button onClick={()=>removeProduct(product.id)} className='product-list-remove-icon'><FontAwesomeIcon icon={faXmark} /></button>
<p>aa</p>
</div>
<hr />
            </div>

        })}
      </div>

    </div>
  )
}

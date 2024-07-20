import React, { useState } from 'react'
import './AddProduct.css'
import uploadImg from '../../assets/uploadImg.gif'
import subImg from '../../assets/subImgIcon.gif'

const AddProduct = ({url}) => {
    const sizeOptions = ["S", "M", "L", "XL"];

    const [image, setImage] = useState(false);
    const [subImages, setSubImages] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [productDetails, setProductDetails] = useState({
        name:'',
        image:'',
        category:'women',
        new_Price:'',
        old_Price:'',
        description:'',
        sizes:[],
        subImages:[]
    })

  const handleSizeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSizes((prevSizes) => [...prevSizes, value]);
    } else {
      setSizes((prevSizes) => prevSizes.filter((size) => size !== value));
    }

};

const handleImageChange = async (event) => {
    const files = event.target.files;
    if (files.length <= 4) {
       
        setSubImages(files)

    } else {
      alert('Please upload 4 images');
    }
  };

    const imageHandler = (e)=>{
        setImage(e.target.files[0])
    }

    const changeHandler = (e)=>{
            setProductDetails({...productDetails, [e.target.name]:e.target.value})
            
    }

    const addHandler = async ()=>{

      if(productDetails.name==='' || productDetails.new_Price===''||productDetails.old_Price===''||productDetails.description===''||sizes.length<=0){
        alert("Please fill complete data")
        return;
      }
  
        let responseData;
        let product = productDetails;
        product.sizes=sizes;
        let formData = new FormData() ;
        formData.append('mainImage', image);
        Array.from(subImages).forEach((file, index) => {
            formData.append('subImages', file);
          });

        await fetch(url+"/upload", {
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData
        }).then((res)=>res.json()).then((data)=>{responseData=data})

         if(responseData.success){
            
             product.image = responseData.mainImgUrl;
            product.subImages = responseData.subImgUrls
          console.log(product);
            await fetch(url+"/product/addproduct",{
                method:"POST",
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(product)
            }).then((res)=>
             res.json()
            ).then((data)=>{
              data.success?alert(`Product added with name ${data.name}`):alert("Fail to add product")
            })
        }else{
          alert(responseData.errors)
        }
    }

  return (
    <div className='add-product'>
        
        <div className="addProduct-itemField">
            <p>Product title</p>
            <input type="text" name='name' value={productDetails.name} onChange={changeHandler} placeholder='Type here' />
        </div>

        <div className="addProduct-itemField">
            <p>Product description</p>
            <textarea rows={10} cols={50} name='description' value={productDetails.description} onChange={changeHandler} />
        </div>


        <div className="addproduct-price">
        <div className="addProduct-itemField">
            <p>Price</p>
            <input type="text" name='old_Price' value={productDetails.old_Price} onChange={changeHandler} placeholder='Type here' />
        </div>
        <div className="addProduct-itemField">
            <p>Offer Price</p>
            <input type="text" name='new_Price' value={productDetails.new_Price} onChange={changeHandler} placeholder='Type here' />
        </div>
        </div>

        <div className="addProduct-itemField">
            <p>Product Category</p>
           <select name="category" className='addproduct-selector' value={productDetails.category} onChange={changeHandler}>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
           </select>
        </div>
        

        <div className="addProduct-itemField">
            <p>Available Sizes</p>
 <div className='sizes_div'>
        {sizeOptions.map((size) => {
          return  <div  key={size}>
              <label className='size'>
              <input
              name='sizes'
                type="checkbox"
                value={size}   
                onChange={handleSizeChange}       
              />
              {size}
            </label>
             </div>
        })}
        </div></div>

        <div className="addProduct-itemField">
            
            <label htmlFor="file-input" className='file-input'>
             <p>Choose Main Image: </p>
               <img src={image?URL.createObjectURL(image):uploadImg} alt="addproduct-img"  />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
        </div>

        <div className="addProduct-itemField">
            
            <label htmlFor="subImages" className='file-input'>
             <p>Choose 1-4 sub-images: </p>
               {subImages.length>0 ?
               <div style={{display:'flex',gap:10}}>
                {Array.from(subImages).map((file, index) => (
                    <img key={index} src={URL.createObjectURL(file)} alt={`subImage-${index}`} />
                  ))}</div>
            :
            <img src={subImg} alt="sub-images"  />
               }
            </label>
            <input onChange={handleImageChange} multiple  type="file" name='subImages' id='subImages' hidden />
        </div>


        <button className='addproduct-btn' onClick={addHandler}>ADD</button>

    </div>
  )
}

export default AddProduct
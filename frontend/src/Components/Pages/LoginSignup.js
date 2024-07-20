import React, { useContext, useState } from 'react'
import styles from './LoginSignup.module.css'
import { ShopContext } from '../Context/ShopContext';

export const LoginSignup = () => {

  const [state , setState] = useState("Login");
  const {url,setToken} = useContext(ShopContext);
  const [formData, setFormData] = useState({
    username:'',
    email:"",
    password:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const loginHandler = async ()=>{
     
    let responseData;
    await fetch (url+"/user/login",{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>responseData=data)

    if(responseData.success){
    localStorage.setItem("token", responseData.token);
    setToken(responseData.token)
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }
  }

  const signupHandler = async ()=>{
    
    let responseData;
    await fetch (url+"/user/register",{
      method:'POST',
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>responseData=data)

    if(responseData.success){
      localStorage.setItem("token", responseData.token);
      setToken(responseData.token)
      window.location.replace("/")
    }else{
      alert(responseData.errors)
    }
  }

  return (
    <div className={styles.loginsignup}>
      <div className={styles['loginsignup-container']}>
        <h1>{state}</h1>
        <div className={styles['loginsignup-fields']}>
         {state==='Sign Up' &&  <input name='username' type='text' value={formData.username} onChange={changeHandler} placeholder='Your Name'/>}
          <input type='email' name='email' placeholder='Email Address' value={formData.email} onChange={changeHandler}  />
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={changeHandler}  />
        </div>
        <button onClick={()=>{(state==='Login')?loginHandler():signupHandler()}}>Continue</button>
        {state==='Login'?
        <p className={styles['loginsignup-login']}>
        Don't have an account? <span style={{cursor:'pointer'}} onClick={()=>setState("Sign Up")}>Click here</span>
      </p>
      :
      <p className={styles['loginsignup-login']}>
          Already Have an account? <span style={{cursor:'pointer'}} onClick={()=>setState("Login")}>Login here</span>
        </p>
      }
        <div className={styles['loginsignup-agree']}>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

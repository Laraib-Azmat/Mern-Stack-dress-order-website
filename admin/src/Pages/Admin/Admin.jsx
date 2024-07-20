import React from 'react'
import SideBar from '../../Components/Sidebar/SideBar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Addproduct/AddProduct'
import { ListProduct } from '../ListProduct/ListProduct'
import './Admin.css'

const Admin = () => {
    const url = "http://localhost:4000"
  return (
    <div className='admin'>

      <SideBar/>

      <Routes>
        <Route path='/addproduct' element={<AddProduct url={url} />} />
        <Route path='/listproduct' element={<ListProduct url={url} />} />
      </Routes>

    </div>
  )
}

export default Admin
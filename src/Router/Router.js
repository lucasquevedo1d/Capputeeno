import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from '../pages/HomePage/HomePage'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import ProductList from '../pages/ProductList/ProductList'
import Cart from '../pages/Cart/Cart'
import ProductDetail from '../pages/ProductDetail/ProductDetail'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path='/productList' element={<ProductList/>}/> */}
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/productDetail/:id' element={<ProductDetail/>}/>
        <Route path='/productList/:category' element={<ProductList/>}/>


    </Routes>
        
    </BrowserRouter>
  )
}

export default Router
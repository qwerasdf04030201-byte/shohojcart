//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login/Login'
import Signup from './components/SignUp/Signup'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Header, Footer, ProductList, ProductPage, Cart, Checkout } from "./components/Storefront";
import Home from './pages/Home'
import Orders from './pages/Orders'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Marketing from './pages/Marketing'
import Discounts from './pages/Discounts'
import Content from './pages/Content'
import Markets from './pages/Markets'


function App() {
  //  const [count, setCount] = useState(0)

  return (
    <Routes>
      {/* Storefront pages */}
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/content" element={<Content />} />
      <Route path="/markets" element={<Markets />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  )
}

export default App

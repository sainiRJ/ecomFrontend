import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login/Login";
import SignUp from "./pages/auth/SignUp/SignUp";
import AddProduct from "./pages/AddProduct/AddProduct";
import Shop from "./pages/Shop/Shop";
import ShopDetail from "./pages/ShopDetail/ShopDetail";
import AddToCart from "./components/AddTocart/AddToCart";
import Checkout from "./components/Checkout/Checkout";
import ContactUs from "./pages/ContactUs/ContactUs";
export default function App() {
  return <>
  
  <BrowserRouter>
    <Routes>     
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/addProduct" element={<AddProduct />} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/detail" element={<ShopDetail/>} />
      <Route path="/cart" element={<AddToCart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/contact" element={<ContactUs/>} />



    </Routes>
  </BrowserRouter>,
  </>;
}

import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../layouts/Footer/Footer';
import ProductDetails from './ProductDetails/ProductDetails';
const ShopDetail = () => {
  return (
    <><Topbar />
    <Navbar />
    <ProductDetails/>
    <Footer/>
    </>
  )
}

export default ShopDetail
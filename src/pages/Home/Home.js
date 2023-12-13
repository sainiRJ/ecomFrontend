import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar'


import Navbar from '../../components/common/Navbar/Navbar';
import HomeCarousel from '../../layouts/HomeCarousel/HomeCarousel';
import Feature from '../../layouts/Feature/Feature';
import Category from '../../layouts/Category/Category';
import Products from '../../components/Products/Products';


function Home() {
  return (<>
     <Topbar></Topbar>
    <Navbar></Navbar> 
    <HomeCarousel></HomeCarousel>
    <Feature></Feature>
    <Category></Category>
    <Products></Products>
  </>
   
  )
}

export default Home
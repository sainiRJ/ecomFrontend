import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar'


import Navbar from '../../components/common/Navbar/Navbar';
import HomeCarousel from '../../layouts/HomeCarousel/HomeCarousel';
import Feature from '../../layouts/Feature/Feature';
import Category from '../../layouts/Category/Category';
import Products from '../../components/Products/Products';
import SpecialOffer from '../../components/Products/SpecialOffer/specialOffer';
import RecentProducts from '../../components/Products/RecentProduct/RecentProduct';
import Footer from '../../layouts/Footer/Footer';


function Home() {
  return (<>
     <Topbar></Topbar>
    <Navbar></Navbar> 
    <HomeCarousel></HomeCarousel>
    <Feature></Feature>
    <Category></Category>
    <Products></Products>
    <SpecialOffer/>
    <RecentProducts/>
    <Footer/>
  </>
   
  )
}

export default Home
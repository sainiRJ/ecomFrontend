import React from 'react'
import Topbar from '../../components/common/Topbar/Topbar'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Navbar from '../../components/common/Navbar/Navbar';
import HomeCarousel from '../../layouts/HomeCarousel/HomeCarousel';
import Feature from '../../layouts/Feature/Feature';
import Category from '../../layouts/Category/Category';


function Home() {
  return (<>
     <Topbar></Topbar>
    <Navbar></Navbar> 
    <HomeCarousel></HomeCarousel>
    <Feature></Feature>
    <Category></Category>
  </>
   
  )
}

export default Home
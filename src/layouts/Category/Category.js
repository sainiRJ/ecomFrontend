import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cat from '../../assets/img/cat-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';
import carousel3 from '../../assets/img/carousel-3.jpg';
import offer1 from '../../assets/img/offer-1.jpg';
import offer2 from '../../assets/img/offer-2.jpg';


import '../../assets/css/bootstrap.min.css';
import '../../assets/lib/animate/animate.min.css';
import '../../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../assets/css/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';

import 'owl.carousel';

import '../../assets/lib/easing/easing'
import '../../assets/mail/contact'
import '../../assets/mail/jqBootstrapValidation.min.js'
import '../../assets/js/main.js'

import "https://code.jquery.com/jquery-3.4.1.min.js"
import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"

const Category = () => {
  return (
    <div className="container-fluid pt-5">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
      <div className="row px-xl-5 pb-3">
        {/* Replace image URLs with appropriate paths in the 'src' attribute */}
        {/* Repeat the following block for each category */}
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <img className="img-fluid" src={cat} alt="none" />
              </div>
              <div className="flex-fill pl-3">
                <h6>Category Name</h6>
                <small className="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <img className="img-fluid" src={cat} alt="none" />
              </div>
              <div className="flex-fill pl-3">
                <h6>Category Name</h6>
                <small className="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <img className="img-fluid" src={cat} alt="none" />
              </div>
              <div className="flex-fill pl-3">
                <h6>Category Name</h6>
                <small className="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div className="overflow-hidden" style={{ width: '100px', height: '100px' }}>
                <img className="img-fluid" src={cat} alt="none" />
              </div>
              <div className="flex-fill pl-3">
                <h6>Category Name</h6>
                <small className="text-body">100 Products</small>
              </div>
            </div>
          </a>
        </div>

        
        {/* Repeat the above block for each category */}
      </div>
    </div>
  );
};

export default Category;

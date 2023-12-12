import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../../assets/img/carousel-1.jpg';
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

const Feature = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row px-xl-5 pb-3">
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
            <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
            <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
            <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
          <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px' }}>
            <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;

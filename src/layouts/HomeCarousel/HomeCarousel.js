import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
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

const HomeCarousel = () => {
  return (
    <div className="container-fluid mb-3">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <Carousel fade id="header-carousel" className="mb-30 mb-lg-0">
            <Carousel.Item style={{ height: '430px' }}>
              <img className="position-absolute w-100 h-100" src={carousel1} style={{ objectFit: 'cover' }} alt="First slide" />
              <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <Button variant="outline-light" className="py-2 px-4 mt-3 animate__animated animate__fadeInUp">Shop Now</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '430px' }}>
              <img className="position-absolute w-100 h-100" src={carousel2} style={{ objectFit: 'cover' }} alt="First slide" />
              <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <Button variant="outline-light" className="py-2 px-4 mt-3 animate__animated animate__fadeInUp">Shop Now</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '430px' }}>
              <img className="position-absolute w-100 h-100" src={carousel3} style={{ objectFit: 'cover' }} alt="First slide" />
              <Carousel.Caption className="d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '700px' }}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <Button variant="outline-light" className="py-2 px-4 mt-3 animate__animated animate__fadeInUp">Shop Now</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            {/* Repeat Carousel.Item for other slides */}
          </Carousel>
        </div>
        <div className="col-lg-4">
          <div className="product-offer mb-30" style={{ height: '200px' }}>
            <img className="img-fluid" src={offer1} alt="Offer 1" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
          <div className="product-offer mb-30" style={{ height: '200px' }}>
            <img className="img-fluid" src={offer2} alt="Offer 2" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="" className="btn btn-primary">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default HomeCarousel;

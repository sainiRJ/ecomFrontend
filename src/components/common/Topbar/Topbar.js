import React from 'react';
import { Dropdown } from 'react-bootstrap';
import $ from 'jquery';

import '../../../assets/css/bootstrap.min.css';
import '../../../assets/lib/animate/animate.min.css';
import '../../../assets/lib/owlcarousel/assets/owl.carousel.min.css';
import '../../../assets/css/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';

// import '../../../assets/lib/easing/easing'
// import '../../../assets/mail/contact'
// import '../../../assets/mail/jqBootstrapValidation.min.js'
// import '../../../assets/js/main.js'

// import "https://code.jquery.com/jquery-3.4.1.min.js"
// import "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"


const Topbar = () => {

    const badgeStyle = {
        paddingBottom: '2px',
        // Other style properties...
      };
  return (
    <div className="container-fluid">
      {/* Topbar Start */}
      <div className="row bg-secondary py-1 px-xl-5">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="d-inline-flex align-items-center h-100">
            <a className="text-body mr-3" href="/">About</a>
            <a className="text-body mr-3" href="/">Contact</a>
            <a className="text-body mr-3" href="/">Help</a>
            <a className="text-body mr-3" href="/">FAQs</a>
          </div>
        </div>
        <div className="col-lg-6 text-center text-lg-right">
          <div className="d-inline-flex align-items-center">
            {/* ... Your dropdown buttons ... */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                My Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/login">Sign in</Dropdown.Item>
                <Dropdown.Item href="#">Sign up</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                USD
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">EUR</Dropdown.Item>
                <Dropdown.Item href="#">GBP</Dropdown.Item>
                <Dropdown.Item href="#">CAD</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                EN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">FR</Dropdown.Item>
                <Dropdown.Item href="#">AR</Dropdown.Item>
                <Dropdown.Item href="#">RU</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-inline-flex align-items-center d-block d-lg-none">
            {/* ... Mobile icons ... */}
             <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={badgeStyle}>0</span>
                    </a>
                    <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className   ="badge text-dark border border-dark rounded-circle" style={badgeStyle}>0</span>
                    </a>
          </div>
        </div>
      </div>
      <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div className="col-lg-4">
          <a href="/" className="text-decoration-none">
            <span className="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
          </a>
        </div>
        <div className="col-lg-4 col-6 text-left">
          <form action="">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for products" />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent text-primary">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4 col-6 text-right">
          <p className="m-0">Customer Service</p>
          <h5 className="m-0">+012 345 6789</h5>
        </div>
      </div>

    </div>
  );
};

export default Topbar;

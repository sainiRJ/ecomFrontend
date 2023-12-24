import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showShoesDropdown, setShowShoesDropdown] = useState(false);

  const handleCategoriesDropdownToggle = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const handlePagesDropdownToggle = () => {
    setShowPagesDropdown(!showPagesDropdown);
  };

  const handleShoesDropdownToggle = () => {
    setShowShoesDropdown(!showShoesDropdown);
  };

  return (
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <Link to="/" className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
            <i className="fa fa-angle-down text-dark" onClick={handleCategoriesDropdownToggle}></i>
          </Link>
          <nav className={`collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light ${showCategoriesDropdown ? 'show' : ''}`} id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: '999' }}>
            <div className="navbar-nav w-100">
              <div className="nav-item dropdown dropright">
                <Link to="#" className="nav-link dropdown-toggle" onClick={handlePagesDropdownToggle}>
                  Dresses <i className="fa fa-angle-right float-right mt-1"></i>
                </Link>
                <div className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${showPagesDropdown ? 'show' : ''}`}>
                  <Link to="/mens-dresses" className="dropdown-item">Men's Dresses</Link>
                  <Link to="/womens-dresses" className="dropdown-item">Women's Dresses</Link>
                  <Link to="/baby-dresses" className="dropdown-item">Baby's Dresses</Link>
                </div>
              </div>
              <div className="nav-item dropdown dropright">
                <Link to="#" className="nav-link dropdown-toggle" onClick={handleShoesDropdownToggle}>
                  Shoes <i className="fa fa-angle-right float-right mt-1"></i>
                </Link>
                <div className={`dropdown-menu position-absolute rounded-0 border-0 m-0 ${showShoesDropdown ? 'show' : ''}`}>
                  <Link to="/mens-shoes" className="dropdown-item">Men's Shoes</Link>
                  <Link to="/womens-shoes" className="dropdown-item">Women's Shoes</Link>
                  <Link to="/kids-shoes" className="dropdown-item">Kids' Shoes</Link>
                </div>
              </div>
              <Link to="/shirts" className="nav-item nav-link">Shirts</Link>
              <Link to="/jeans" className="nav-item nav-link">Jeans</Link>
              <Link to="/swimwear" className="nav-item nav-link">Swimwear</Link>
              <Link to="/sleepwear" className="nav-item nav-link">Sleepwear</Link>
              <Link to="/sportswear" className="nav-item nav-link">Sportswear</Link>
              <Link to="/jumpsuits" className="nav-item nav-link">Jumpsuits</Link>
              <Link to="/blazers" className="nav-item nav-link">Blazers</Link>
              <Link to="/jackets" className="nav-item nav-link">Jackets</Link>
              <Link to="/shoes" className="nav-item nav-link">Shoes</Link>
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto py-0">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/shop" className="nav-item nav-link">Shop</Link>
                <Link to="/detail" className="nav-item nav-link">Shop Detail</Link>
                <Dropdown as="li">
                  <Dropdown.Toggle as={Link} to="#" className="nav-link dropdown-toggle">
                    Pages <i className="fa fa-angle-down mt-1"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/cart">Shopping Cart</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/checkout">Checkout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                <Link to="/" className="btn px-0">
                  <i className="fas fa-heart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                </Link>
                <Link to="/" className="btn px-0 ml-3">
                  <i className="fas fa-shopping-cart text-primary"></i>
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: '2px' }}>0</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

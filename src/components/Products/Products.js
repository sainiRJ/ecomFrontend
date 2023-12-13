import React from 'react'
import { Dropdown } from 'react-bootstrap';




const Products = ()=> {
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
        {/* Repeat this block for each product */}
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.imgSrc} alt={product.name} />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-shopping-cart"></i></a>
                  <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
                  <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
                  <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>${product.price}</h5>
                  <h6 className="text-muted ml-2"><del>${product.previousPrice}</del></h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  {/* Render stars based on the product's rating */}
                  {renderStars(product.rating)}
                  <small>({product.reviews})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Dummy product data (Replace this with your actual product data)
const products = [
  {
    imgSrc: '../../assets/img/product-1.jpg',
    name: 'Product 1',
    price: 123.0,
    previousPrice: 150.0,
    rating: 5,
    reviews: 99,
  },
  // Add more products similarly
];

// Function to render star icons based on product rating
function renderStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<small key={i} className="fa fa-star text-primary mr-1"></small>);
    } else {
      stars.push(<small key={i} className="far fa-star text-primary mr-1"></small>);
    }
  }
  return stars;
}

export default Products;

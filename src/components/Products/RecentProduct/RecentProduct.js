import React from 'react';

// Import your product images and any other necessary data
import product1 from '../../../assets/img/product-1.jpg';
import product2 from '../../../assets/img/product-2.jpg';
// ... import other product images

const productData = [
  {
    id: 1,
    image: product1,
    name: 'Product Name Goes Here',
    price: 123.00,
    discountPrice: 123.00,
    stars: 5,
    reviews: 99,
  },
  // Add more product objects as needed
];

const RecentProducts = () => {
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Recent Products</span>
      </h2>
      <div className="row px-xl-5">
        {productData.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.image} alt="" />
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
                  <h5>${product.price.toFixed(2)}</h5>
                  <h6 className="text-muted ml-2"><del>${product.discountPrice.toFixed(2)}</del></h6>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  {[...Array(product.stars)].map((_, index) => (
                    <small key={index} className="fa fa-star text-primary mr-1"></small>
                  ))}
                  {(product.stars % 1 !== 0) && <small className="fa fa-star-half-alt text-primary mr-1"></small>}
                  <small>({product.reviews})</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProducts;

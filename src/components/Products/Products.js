import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedProduct = ({ product }) => {
  const handleAddToCart = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:5001/addcart', product, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        console.log('Product added to cart:', response.data);
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
      <div className="product-item bg-light mb-4">
        <div className="product-img position-relative overflow-hidden" style={{ height: '350px' }}>
          <img
            className="img-fluid w-100 h-100"
            src={product.image}
            alt={product.title}
            style={{ objectFit: 'contain', width: '100px', height: '200px' }}
          />
          <div className="product-action">
            <a className="btn btn-outline-dark btn-square"  onClick={handleAddToCart} href="/cart"><i className="fa fa-shopping-cart"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="far fa-heart"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-sync-alt"></i></a>
            <a className="btn btn-outline-dark btn-square" href=""><i className="fa fa-search"></i></a>
          </div>
        </div>
        <div className="text-center py-4">
          <a className="h6 text-decoration-none text-truncate" href={product.link}>{product.title}</a>
          <div className="d-flex align-items-center justify-conten t-center mt-2">
            <h5>${product.price}</h5><h6 className="text-muted ml-2"><del>${product.price}</del></h6>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <small key={index} className={`fa fa-star${index + 1 <= product.rating ? ' text-primary' : ''} mr-1`}></small>
            ))}
            <small>({product.reviews})</small>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend using Axios
    axios.get("http://localhost:5001/products")
      .then(response => {
        // Assuming the response data is an array of products
        setProducts(response.data);
        console.log("this is data" + response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
      <div className="row px-xl-5">
        {products.map(product => <FeaturedProduct key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

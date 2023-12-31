import React from 'react';
import image from '../../../assets/img/offer-1.jpg';
import image1 from '../../../assets/img/offer-2.jpg';

const SpecialOffer = () => {
  return (
    <div className="container-fluid pt-5 pb-3">
      <div className="row px-xl-5">
        <div className="col-md-6">
          <div className="product-offer mb-30" style={{ height: '300px' }}>
            <img className="img-fluid" src={image} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="product-offer mb-30" style={{ height: '300px' }}>
            <img className="img-fluid" src={image1} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Save 20%</h6>
              <h3 className="text-white mb-3">Special Offer</h3>
              <a href="" className="btn btn-primary">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;

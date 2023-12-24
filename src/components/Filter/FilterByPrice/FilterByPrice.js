import React from 'react';

const FilterByPrice = () => {
  return (
    <div className="bg-light p-4 mb-30">
      <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input type="checkbox" className="custom-control-input" checked id="price-all" />
          <label className="custom-control-label" htmlFor="price-all">
            All Price
          </label>
          <span className="badge border font-weight-normal">1000</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input type="checkbox" className="custom-control-input" id="price-1" />
          <label className="custom-control-label" htmlFor="price-1">
            $0 - $100
          </label>
          <span className="badge border font-weight-normal">150</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input type="checkbox" className="custom-control-input" id="price-2" />
          <label className="custom-control-label" htmlFor="price-2">
            $100 - $200
          </label>
          <span className="badge border font-weight-normal">295</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input type="checkbox" className="custom-control-input" id="price-3" />
          <label className="custom-control-label" htmlFor="price-3">
            $200 - $300
          </label>
          <span className="badge border font-weight-normal">246</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
          <input type="checkbox" className="custom-control-input" id="price-4" />
          <label className="custom-control-label" htmlFor="price-4">
            $300 - $400
          </label>
          <span className="badge border font-weight-normal">145</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
          <input type="checkbox" className="custom-control-input" id="price-5" />
          <label className="custom-control-label" htmlFor="price-5">
            $400 - $500
          </label>
          <span className="badge border font-weight-normal">168</span>
        </div>
      </form>
    </div>
  );
};

export default FilterByPrice;

import React from 'react';
import Topbar from '../../components/common/Topbar/Topbar';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../layouts/Footer/Footer';
import ShopSidebar from '../../components/ShopSidebar/ShopSidebar';
import ProductSorting from '../../components/ProductSorting/ProductSorting';
import ShopProduct from '../../components/Products/ShopProduct.js/ShopProduct';
const Shop = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <ShopSidebar />
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <ProductSorting />
              <ShopProduct />
              <div className="col-12">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a className="page-link" href="#">
                        Previous
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

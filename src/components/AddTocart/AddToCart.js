import React from 'react';
import Topbar from '../common/Topbar/Topbar';
import Navbar from '../common/Navbar/Navbar';
import Footer from '../../layouts/Footer/Footer';
import Cart from './cart/Cart';

function AddToCart() {
    return (
        <>
            <Topbar />
            <Navbar />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="/">Home</a>
                            <a className="breadcrumb-item text-dark" href="/shop">Shop</a>
                            <span className="breadcrumb-item active">Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
            <Cart/>
            <Footer />
        </>
    );
}

export default AddToCart;

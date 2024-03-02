import React, { useState } from "react";

const AddressFrom = () => {
    const [createAccount, setCreateAccount] = useState(false);
    const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
    <>
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-12">
                    <nav className="breadcrumb bg-light mb-30">
                        <a className="breadcrumb-item text-dark" href="#">Home</a>
                        <a className="breadcrumb-item text-dark" href="#">Shop</a>
                        <span className="breadcrumb-item active">Checkout</span>
                    </nav>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Email</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Mobile No.</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 1</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 2</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Country</label>
                                <select className='custom-select'>
                                    <option selected>United States</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>City</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>State</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>ZipCode</label>
                                <input className="form-control" type="text" placeholder="John" />
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="newaccount"
                                            checked={createAccount}
                                            onChange={() => setCreateAccount(!createAccount)}
                                        />
                                        <label className="custom-control-label" htmlFor="newaccount">
                                            Create an account
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="shipto"
                                            checked={shipToDifferentAddress}
                                            onChange={() => setShipToDifferentAddress(!shipToDifferentAddress)}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="shipto"
                                            data-toggle="collapse"
                                            data-target="#shipping-address"
                                        >
                                            Ship to different address
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse mb-5" id="shipping-address">
                        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                        <div className="bg-light p-30">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>First Name</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Last Name</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Email</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Mobile No.</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 1</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Address Line 2</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>Country</label>
                                    <select className='custom-select'>
                                        <option selected>United States</option>
                                        <option>Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>City</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>State</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>ZipCode</label>
                                    <input className="form-control" type="text" placeholder="John" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AddressFrom;
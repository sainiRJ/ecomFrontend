import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Cart({ product, total }) {

    return (
        <>
            <tr>
                <td className="align-middle"><img src="img/product-1.jpg" alt="" style={{ width: '50px' }} /> {product.title}</td>
                <td className="align-middle">{product.price}</td>
                <td className="align-middle">
                    <div className="input-group quantity mx-auto" style={{ width: '100px' }}>
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus">
                                <i className="fa fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center" value={product.quantity} />
                        <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-plus">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </td>
                <td className="align-middle">{product.subtotal}</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button></td>
            </tr>
        </>
    )
}

const Carts = () => {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem('token');

    console.log("products: ", products)
    console.log("items: ", products.items)


    useEffect(() => {
        axios.get("http://localhost:5001/cart", {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(response => {
                setProducts(response.data);
                console.log("response" + response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (<>

        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8 table-responsive mb-5">
                    <table className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle">

                            {products.items.map(product => <Cart key={product.id} product={product} total={products.total} />)}
                            {/* Add other table rows similarly */}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4">
                    <form className="mb-30" action="">
                        <div className="input-group">
                            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
                            <div className="input-group-append">
                                <button className="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="border-bottom pb-2">
                            <div className="d-flex justify-content-between mb-3">
                                <h6>Subtotal</h6>
                                <h6>{products.total}</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-medium">Shipping</h6>
                                <h6 className="font-weight-medium">$10</h6>
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="d-flex justify-content-between mt-2">
                                <h5>Total</h5>
                                <h5>{products.total}</h5>
                            </div>
                            <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Carts
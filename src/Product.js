import React from 'react'
import "./Product.css";
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>the lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>20.00</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                </div>
            </div>
            <img className="product__image" src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY780_.jpg" alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product

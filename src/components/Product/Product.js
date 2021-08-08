import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    console.log(props.product);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="single-product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <p><small>by : {seller}</small></p>
                <h4>$ {price}</h4>
                <p><small>only {stock} left in stock -order soon.</small></p>
                <button className="cart-btn"><FontAwesomeIcon icon={faShoppingCart}/> Ad to cart</button>
            </div>
        </div>
    );
};

export default Product;
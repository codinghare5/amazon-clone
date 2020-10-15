import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/x-site/uk_desktop_pd20_ilm._CB418777240_.jpg" 
                alt="" 
                className="checkout__ad"/>
            </div>
            <div>
                <h2 className="checkout__title">Your shopping Basket</h2>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;

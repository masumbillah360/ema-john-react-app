import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const p of cart){
        total += p.price;
        shipping += p.shipping;
    }
    const tax = (total * .1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    console.log(cart)
    return (
        <div className='carted-products'>
            <div className='products'>
                <h4>Carted Items Details</h4>
                <h3>all Item's: {cart.length}</h3>
                <p>Total Price : {total}</p>
                <p>Total Shipping : {shipping}</p>
                <p>Total Tax : {tax} </p>
                <h4>Grand Total : {grandTotal} </h4>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let name = [];
    let quantity = 0;
    for(const p of cart){
        quantity = quantity + p.quantity;
        total += p.price * quantity;
        shipping += p.shipping;
        name.push(p.name)
    }
    const tax = (total * .1).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
    return (
        <div className='carted-products'>
            <div className='products'>
                <h4>Carted Items Details</h4>
                <h3>all Item's: {quantity}</h3>
                <p>Total Price : {total}</p>
                {/* <p>Products Name :</p>
                {
                    name.map(n=><p key={Math.random()*10}>{n}</p>)
                } */}
                <p>Total Shipping : {shipping}</p>
                <p>Total Tax : {tax} </p>
                <h4>Grand Total : {grandTotal} </h4>
            </div>
        </div>
    );
};

export default Cart;
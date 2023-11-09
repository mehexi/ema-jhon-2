import React from 'react';

const Cart = (props) => {
    const { sellectedItem } = props
    const cartItem = props.cartItem
    console.log(cartItem)
    
    let total = 0
    let shipping = 0
    for (const products of cartItem) {
        total = total + products.price
        shipping = shipping + products.shipping
    }
    const tax = total * 0.07
    
    const grandTotal = total + shipping + tax

    

    return (
        <div>
            <h1>seelected item : {sellectedItem}</h1>
            <h1>total : {total}</h1>
            <h1>Shipping : {shipping}</h1>
            <h1>Tax : {tax.toFixed(2)}</h1>
            <h1>grandTotal : {grandTotal.toFixed(2)}</h1>
        </div>
    );
};

export default Cart;
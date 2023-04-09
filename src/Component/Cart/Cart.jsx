import React from 'react';
import './Cart.css'
const Cart = ({cart,removeBtn}) => {
    return (
        <div>
            <h1>Order Summary : {cart.length}</h1>
            {
                cart.map(tshirt => <p key={tshirt._id}> {tshirt.name}<button onClick={()=>removeBtn(tshirt._id)}>X</button> </p> )
            }
            
        </div>
    );
};

export default Cart;
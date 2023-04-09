import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt ,btnClick}) => {
    const {_id,gender,picture,name,price} =tshirt

    return (
        <div className='tshitrconteinar'>
            
                <img src={picture} alt="" />
                <h2>Name: {name}</h2>
                <h3>Price: ${price}</h3>
                <h3>Gender: {gender}</h3>
                <button onClick={() => btnClick(tshirt)}>Buy Now</button>


        
           
        </div>
    );
};

export default Tshirt;
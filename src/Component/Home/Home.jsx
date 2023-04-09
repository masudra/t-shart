import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshrt/Tshirt';
import './Home.css'
import Cart from '../Cart/Cart';

import {toast } from 'react-toastify';


const Home = () => {
    const tshirtdata =useLoaderData()
    const [cart ,setCart]=useState([])

    const btnClick = tshirt =>{
        const exgist = cart.find(ts => ts._id ==tshirt._id)
        if(exgist){
            toast('alrady exist')

        }
        else{
            const newTshirt = [...cart, tshirt]
            setCart(newTshirt)

        }
    }
    const removeBtn = id=>{
        const remove = cart.filter(ts => ts._id !== id)
        setCart(remove)

    }

    
    return (
        <div className='homecomponet'>
            <div className='home-child'>
            {
             tshirtdata.map(tshirt => <Tshirt key={tshirt._id} tshirt={tshirt} btnClick={btnClick} ></Tshirt>)
            }
            </div>
            <div>
                <Cart cart={cart} removeBtn={removeBtn}></Cart>
            </div>
        </div>

       
    )
       
};

export default Home;
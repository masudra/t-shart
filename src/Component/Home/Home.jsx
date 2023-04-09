import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirtdata =useLoaderData()
    console.log(tshirtdata)
    return (
        <div>
            <h1>le{tshirtdata.length}</h1>
            
        </div>
    );
};

export default Home;
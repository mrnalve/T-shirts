import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData()
    console.log(tShirts);
    return (
        <div>
            <h2>this is home</h2>
        </div>
    );
};

export default Home;
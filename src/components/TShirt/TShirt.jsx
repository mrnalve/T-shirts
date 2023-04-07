import React from 'react';
import './Tshirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {
    const {picture , name, price, _id} = tShirt
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddToCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default TShirt;
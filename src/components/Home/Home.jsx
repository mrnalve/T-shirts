import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import "./Home.css";
import toast from 'react-hot-toast';

const Home = () => {
  const tShirts = useLoaderData();
  // add product in cart
  const [cart, setCart] = useState([]);
  const handleAddToCart = (tShirt) => {
    const exist = cart.find((ts) => ts._id == tShirt._id);
    if (exist) {
      toast.success('You have already added this item')
    }else{
        const newCart = [...cart, tShirt];
      setCart(newCart);
    }
  };
  // remove from cart
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id != id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="tShirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;

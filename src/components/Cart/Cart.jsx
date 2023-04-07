import React from "react";
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2 className={cart.length === 1? 'blue':'red'}>cart item:{cart.length}</h2>
    <p className={`bold ${cart.length===3 ? 'yellow':'purple'}`}>Something to write</p>
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name} <button onClick={()=>handleRemoveFromCart(tShirt._id)}>Remove</button>
        </p>
      ))}

      {
        cart.length === 2 && <span >Double bonus</span>
      }
      {
        cart.length === 3 || <h3>its not three</h3>
      }
    </div>
  );
};

export default Cart;

/****Conditional Rendering
 * 1. use if or if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: ( if the condition is true then the next thing will be displayed)
 * 4. Logical ||: ( if the condition is false then the next thing will be displayed)
 * 
 * *****/  

/**** Conditional CSS Class
* 1. use ternary
* 2. ternary inside template string

*/ 



import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Redux/Cartslice';  

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart); 

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Products Detail</h3>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt="Product" /> 
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>Remove</button> {/* Fixed button syntax */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
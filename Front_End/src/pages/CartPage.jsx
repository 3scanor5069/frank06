// src/pages/CartPage.js
import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Order</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <strong>{item.title}</strong> x{item.quantity}
              </div>
              <div>${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          <button className="clear" onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartPage;

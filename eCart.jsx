import React, { useState } from 'react';

const EcommerceCart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div>
      <h1>E-commerce Cart</h1>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <div>
              Quantity:
              <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      </div>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <button onClick={clearCart}>Clear Cart</button>
      <button onClick={() => addToCart({ image: 'product.jpg', name: 'Product', price: 9.99 })}>
        Add Product
      </button>
    </div>
  );
};

export default EcommerceCart;

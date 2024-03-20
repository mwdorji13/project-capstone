// src/components/Cart.tsx
import React from 'react';

interface CartItem {
  id: number;
  description: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  // Function to remove item from cart
  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Function to calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Checkout form submit handler
  const handleCheckoutSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const cardDetails = {
      cardNumber: formData.get('cardNumber') as string,
      cardName: formData.get('cardName') as string,
      expiryDate: formData.get('expiryDate') as string,
      securityCode: formData.get('securityCode') as string
    };
    console.log('Checkout with card details:', cardDetails);
    // You can implement your checkout logic here
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.description} - ${item.price}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
          <form onSubmit={handleCheckoutSubmit}>
            <label>
              Card Number:
              <input type="text" name="cardNumber" required />
            </label>
            <label>
              Card Name:
              <input type="text" name="cardName" required />
            </label>
            <label>
              Expiry Date:
              <input type="text" name="expiryDate" placeholder="MM/YY" required />
            </label>
            <label>
              Security Code:
              <input type="text" name="securityCode" required />
            </label>
            <button type="submit">Checkout</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;

// src/features/cart/Cart.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchCart, deleteCartItem } from "./cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.uid || "123";

  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId));
    }
  }, [dispatch, userId]);

  const handleRemove = (productId: string) => {
    dispatch(deleteCartItem({ userId, productId }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map((item) => (
        <div key={item.productId}>
          <p>Product ID: {item.productId}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemove(item.productId)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;


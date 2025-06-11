// src/features/cart/CartAPI.ts

const BASE_URL = "https://script.google.com/macros/s/AKfycbwW6n9WalkI6wq7DQjRVpzIJ82sUrEIUm1UkhIE6JG7Eos5Iv-cgxJJZN4iSaeg4yUI/exec";

export const getCartItems = async (userId: string) => {
  const res = await fetch(`${BASE_URL}?userId=${userId}`);
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
};

export const addToCart = async (userId: string, productId: string, quantity: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ userId, productId, quantity }),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
};

export const deleteFromCart = async (userId: string, productId: string) => {
  const res = await fetch(`${BASE_URL}?userId=${userId}&productId=${productId}`, {
    method: "DELETE",
  });
  return res.json();
};

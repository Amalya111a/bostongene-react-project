import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwW6n9WalkI6wq7DQjRVpzIJ82sUrEIUm1UkhIE6JG7Eos5Iv-cgxJJZN4iSaeg4yUI/exec';

export interface CartItem {
  userId: string;
  productId: string;
  quantity: number;
  [key: string]: any;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// GET - Fetch user's cart items
export const fetchCart = createAsyncThunk<CartItem[], string>(
  'cart/fetchCart',
  async (userId) => {
    const res = await axios.get(proxyUrl +`${GOOGLE_SHEET_URL}?userId=${userId}`);
    return res.data;
  }
);

// POST - Add item to cart (quantity is delta to add)
export const addToCart = createAsyncThunk<CartItem, CartItem>(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const res = await fetch(proxyUrl + GOOGLE_SHEET_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: "Add", userId, productId, quantity }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error('Server error:', text);
        return rejectWithValue({ error: 'Failed to add to cart' });
      }

      const data = await res.json();
      return data; // Expecting the updated CartItem here
    } catch (err) {
      console.error('Fetch failed:', err);
      return rejectWithValue({ error: 'Network error' });
    }
  }
);

// POST - Delete item from cart
export const deleteCartItem = createAsyncThunk<{ userId: string; productId: string }, { userId: string; productId: string }>(
  'cart/deleteCartItem',
  async ({ userId, productId }) => {
    await axios.post(proxyUrl + GOOGLE_SHEET_URL, {
      action: 'delete',
      userId,
      productId,
    });
    return { userId, productId };
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // When fetching cart succeeds, filter out items with quantity <= 0
    builder.addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload.filter(item => item.quantity > 0);
    });

    // When adding to cart succeeds, replace or add the item with quantity from server response
    builder.addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(
        item =>
          item.userId === action.payload.userId &&
          item.productId === action.payload.productId
      );

      if (existingIndex !== -1) {
        state.items[existingIndex].quantity = action.payload.quantity;

        if (state.items[existingIndex].quantity <= 0) {
          state.items.splice(existingIndex, 1);
        }
      } else {
        if (action.payload.quantity > 0) {
          state.items.push(action.payload);
        }
      }
    });

    // When deleting item succeeds, remove it from state
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const { userId, productId } = action.payload;
      state.items = state.items.filter(item => !(item.userId === userId && item.productId === productId));
    });
  },
});

export default cartSlice.reducer;

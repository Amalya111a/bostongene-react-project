// src/features/cart/cartSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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

// ✅ GET - Fetch user's cart
export const fetchCart = createAsyncThunk<CartItem[], string>(
  'cart/fetchCart',
  async (userId) => {
    const res = await axios.get(`${GOOGLE_SHEET_URL}?userId=${userId}`);
    console.log(res);
    return res.data;
  }
);

// ✅ POST - Add item to cart
export const addToCart = createAsyncThunk<CartItem, CartItem>(
    'cart/addToCart',
    async ({ userId, productId, quantity }, { rejectWithValue }) => {
      try {
        const res = await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          body: JSON.stringify({userId, productId, quantity}),
        });

        if (!res.ok) {
          const text = await res.text();
          console.error('Server error:', text);
          return rejectWithValue({ error: 'Failed to add to cart' });
        }

        const data = await res.json();
        return data;
      } catch (err) {
        console.error('Fetch failed:', err);
        return rejectWithValue({ error: 'Network error' });
      }
    }
);


// ✅ DELETE - Remove item from cart
export const deleteCartItem = createAsyncThunk<void, { userId: string; productId: string }>(
  'cart/deleteCartItem',
  async ({ userId, productId }) => {
    await axios.delete(`${GOOGLE_SHEET_URL}?userId=${userId}&productId=${productId}`);
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Load all items for the user
    builder.addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    });

    // Append the added item to cart
    builder.addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(
        item =>
          item.userId === action.payload.userId &&
          item.productId === action.payload.productId
      );

      if (existingIndex !== -1) {
        // If item already exists, update quantity
        state.items[existingIndex].quantity += action.payload.quantity;
      } else {
        // Otherwise, add new item
        state.items.push(action.payload);
      }
    });

    // Remove deleted item from the state
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      // Since deleteCartItem returns void, we filter based on last known input
      // This logic is optional unless you manually track last deleted item
      // Suggest refetching cart via dispatch(fetchCart(userId)) after deletion
    });
  },
});

export default cartSlice.reducer;

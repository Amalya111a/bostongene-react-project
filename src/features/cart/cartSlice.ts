import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '../../firebase'; // путь к твоему firebase.ts

export interface CartItem {
  userId: string;
  productId: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

// GET - Fetch user's cart
export const fetchCart = createAsyncThunk<CartItem[], string>(
  'cart/fetchCart',
  async (userId) => {
    const q = query(collection(db, 'cart'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as CartItem);
  }
);

// POST - Add or update item in cart
export const addToCart = createAsyncThunk<CartItem, CartItem>(
  'cart/addToCart',
  async ({ userId, productId, quantity }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, 'cart', `${userId}_${productId}`);
      await setDoc(docRef, { userId, productId, quantity }, { merge: true });
      return { userId, productId, quantity };
    } catch (err) {
      console.error(err);
      return rejectWithValue({ error: 'Failed to update cart' });
    }
  }
);

// DELETE - Remove item from cart
export const deleteCartItem = createAsyncThunk<{ userId: string; productId: string }, { userId: string; productId: string }>(
  'cart/deleteCartItem',
  async ({ userId, productId }) => {
    await deleteDoc(doc(db, 'cart', `${userId}_${productId}`));
    return { userId, productId };
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload.filter(item => item.quantity > 0);
    });
    builder.addCase(addToCart.fulfilled, (state, action: PayloadAction<CartItem>) => {
      const index = state.items.findIndex(i => i.userId === action.payload.userId && i.productId === action.payload.productId);
      if (index >= 0) {
        state.items[index] = action.payload;
      } else {
        state.items.push(action.payload);
      }
    });
    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      const { userId, productId } = action.payload;
      state.items = state.items.filter(item => !(item.userId === userId && item.productId === productId));
    });
  },
});

export default cartSlice.reducer;

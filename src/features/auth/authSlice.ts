import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'lucide-react';

interface User {
  uid?: string;
  email?: string | null;
  displayName?: string | null;
  // ավելացրու ուրիշ օգտվողի տվյալներ, եթե պետք լինի
}

interface AuthState {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: User,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<User>) {
      console.log(action.payload)
      const user = {
        uid: action.payload.uid,
        email: action.payload.email,
        displayName: action.payload.displayName
      }
      state.user = user
      state.isAuthenticated = true;
      state.loading = false;
    },
    userLoggedOut(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    }
  },
});

export const { userLoggedIn, userLoggedOut, setLoading } = authSlice.actions;

export default authSlice.reducer;

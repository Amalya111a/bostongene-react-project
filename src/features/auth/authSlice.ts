// src/features/auth/authSlice.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth"; // Keep User type if you still want to store the user object

interface AuthState {
  user: User | null; // Keep storing the user object if you need user details later
  isAuthenticated: boolean; // THIS IS THE KEY SIMPLE BOOLEAN
  loading: boolean;          // To indicate if initial auth check is ongoing
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false, // Initially false
  loading: true,          // Start as true, App.tsx will set to false after check
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // When Firebase confirms a user is logged in
    userLoggedIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
    },
    // When Firebase confirms no user is logged in (or on explicit logout)
    userLoggedOut: (state) => { // Renamed from 'logout' to 'userLoggedOut' for clarity with App.tsx
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    // Optional: Use this if you have other async auth operations that need a loading state
    setAuthLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Export these new action creators
export const { userLoggedIn, userLoggedOut, setAuthLoading } = authSlice.actions;
export default authSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  uid: string;
  email?: string;
  // ավելացրու ուրիշ օգտվողի տվյալներ, եթե պետք լինի
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn(state, action: PayloadAction<User>) {
      state.user = action.payload;
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

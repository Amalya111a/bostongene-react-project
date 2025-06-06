import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from '../features/clinics/clinicSlice';
import authReducer from '../features/auth/authSlice';
import doctorsReducer from '../features/doctors/doctorsSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    clinics: clinicReducer,
    auth: authReducer,
    doctors: doctorsReducer,
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

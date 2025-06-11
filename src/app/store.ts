import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from '../features/clinics/clinicSlice';
import authReducer from '../features/auth/authSlice'; // This is correct
import doctorsReducer from '../features/doctors/doctorsSlice';
import productsReducer from '../features/products/productsSlice';
import appointmentReducer from '../features/appointments/appointmentsSlice';
import cartReducer from '../features/cart/cartSlice'; 

export const store = configureStore({
  reducer: {
    clinics: clinicReducer,
    auth: authReducer, 
    doctors: doctorsReducer,
    products: productsReducer,
    appointments: appointmentReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
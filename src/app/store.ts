import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice';
import doctorsReducer from '../features/doctors/doctorsSlice';
import appointmentsReducer from '../features/appointments/appointmentsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    doctors: doctorsReducer,
    appointments: appointmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
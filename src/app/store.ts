import { configureStore } from '@reduxjs/toolkit';
import clinicReducer from '../features/clinic/clinicSlice';

export const store = configureStore({
  reducer: {
    clinics: clinicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

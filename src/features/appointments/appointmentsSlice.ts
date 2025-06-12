// src/features/appointments/appointmentSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { submitAppointment } from "../../services/appointmentService";
import {getAppointments} from "./appointmentsAPI";

 export interface Appointment {
  doctorId: string;
  doctorName: string;
  patientEmail: string;
  phoneNumber: string;
  date: string;
  time: string;
  userId?: string;
  notes: string | null | undefined;
    id?: number;
    specialty?: string;
    workplace?: string;
    status?: 'upcoming' | 'completed' | 'cancelled';
}

interface AppointmentState {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
}

const initialState: AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
};

// Async thunk to fetch appointments
export const fetchAppointmentsThunk = createAsyncThunk(
    "appointments/fetch",
    async () => {
      const data = await getAppointments();
      return data;
    }
);

// Async thunk to submit appointment (optional in slice)
export const submitAppointmentThunk = createAsyncThunk(
    "appointments/submit",
    async (appointment: Appointment) => {
      await submitAppointment(appointment);
      return appointment;
    }
);

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchAppointmentsThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAppointmentsThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.appointments = action.payload;
        })
        .addCase(fetchAppointmentsThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to fetch appointments";
        })
        .addCase(submitAppointmentThunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(submitAppointmentThunk.fulfilled, (state, action) => {
          state.loading = false;
          state.appointments.push(action.payload);
        })
        .addCase(submitAppointmentThunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Failed to submit appointment";
        });
  },
});

export default appointmentSlice.reducer;
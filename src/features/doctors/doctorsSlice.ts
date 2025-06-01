import { createSlice } from '@reduxjs/toolkit';
import {fetchDoctorsThunk} from "./doctorsAPI";
import type{Doctor} from "../../services/doctorService";

interface DoctorState {
  doctors: Doctor[];
  loading: boolean;
  error: string | null;
  total: number;
  pageSize: number;
  currentPage: number;
}
const initialState: DoctorState = {
  doctors:[],
  loading: false,
  error: null,
  total: 0,
  pageSize: 3,
  currentPage: 1,
};

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {
        setPage(state, action) {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctorsThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctorsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.doctors = action.payload.data;
                state.total = action.payload.total;
                state.pageSize = action.payload.pageSize;
                state.currentPage = action.payload.page;
            })
            .addCase(fetchDoctorsThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load doctors';
            });
    },
});

export const { setPage } = doctorsSlice.actions;
export default doctorsSlice.reducer;
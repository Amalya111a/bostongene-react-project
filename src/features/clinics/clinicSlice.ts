import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClinics = createAsyncThunk('clinics/fetchClinics', async () => {
const response = await axios.get('/clinics.json');
  return response.data;
});

interface Clinic {
  id: number;
  name: string;
  address: string;
  phone?: string;
  image?: string;  
}


interface ClinicsState {
  data: Clinic[];
  loading: boolean;
  error: string | null;
}

const initialState: ClinicsState = {
  data: [],
  loading: false,
  error: null,
};

const clinicSlice = createSlice({
  name: 'clinics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClinics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClinics.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchClinics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching clinics';
      });
  },
});

export default clinicSlice.reducer;

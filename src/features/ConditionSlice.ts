import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Condition {
  id: number;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  image?: string;
  relatedProducts?: string[];
}

interface ConditionState {
  conditions: Condition[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
}

const initialState: ConditionState = {
  conditions: [],
  loading: false,
  error: null,
  searchTerm: "",
};

// Replace with your actual API
export const fetchConditions = createAsyncThunk("conditions/fetchConditions", async () => {
  const response = await axios.get("https://api.npoint.io/your-conditions-endpoint"); // Replace
  return response.data as Condition[];
});

const conditionSlice = createSlice({
  name: "conditions",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConditions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchConditions.fulfilled, (state, action: PayloadAction<Condition[]>) => {
        state.conditions = action.payload;
        state.loading = false;
      })
      .addCase(fetchConditions.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch conditions.";
      });
  },
});

export const { setSearchTerm } = conditionSlice.actions;

export default conditionSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDoctors } from "../../services/doctorService";
import type { DoctorsResponse } from "../../services/doctorService";

export const fetchDoctorsThunk = createAsyncThunk<
    DoctorsResponse,
    { page: number; pageSize: number }
>("doctors/fetchDoctors", async ({ page, pageSize }) => {
    return await fetchDoctors(page, pageSize);
});

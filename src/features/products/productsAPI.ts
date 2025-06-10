import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/productService";
import type { Product } from "../../services/productService";

export const fetchProductsThunk = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    return await fetchProducts();
  }
);

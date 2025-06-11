import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../../services/productService";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating?: number;
  info: string;
  isOpen?: boolean; // Նոր դաշտ՝ Cart-ի բաց լինելու համար
}

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  isOpen: boolean; // Ուղղվել է `false` արժեքից `boolean` տիպի
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  searchTerm: "",
  isOpen: false,
};

export const loadProducts = createAsyncThunk("products/loadProducts", async () => {
  const products = await fetchProducts();
  return products;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.isOpen = true;
        state.products = action.payload;
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});

export const { setSearchTerm, toggleCart, setCartOpen } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState, AppThunk } from "./store";

export const ProductSlice = createSlice({
  name: "product",

  initialState: {
    data: [],
  },

  reducers: {
    setProductData: (state: any, action: any) => {
      state.data = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state: any, action: any) => {
      if (!action.payload.product.data) {
        return state;
      }

      state.data = action.payload.product.data;
    },
  },
});

export const { setProductData } = ProductSlice.actions;

export const selectProduct = (state: AppState) => state.product;

export const fetchProduct = (): AppThunk => async (dispatch: any) => {
  const timeoutPromise = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  const response = await fetch(
    `https://api.pintu.co.id/v2/trade/price-changes`
  );
  const data = await response.json();

  await timeoutPromise(1500);

  dispatch(setProductData(data));
};

export default ProductSlice.reducer;

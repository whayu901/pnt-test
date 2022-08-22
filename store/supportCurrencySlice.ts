import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState, AppThunk } from "./store";

export const SupportCurrencySlice = createSlice({
  name: "supportCurrency",

  initialState: {
    dataSupport: [],
  },

  reducers: {
    setSupportCurrencyData: (state: any, action: any) => {
      state.dataSupport = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state: any, action: any) => {
      if (!action.payload.supportCurrency.dataSupport) {
        return state;
      }

      state.dataSupport = action.payload.supportCurrency.dataSupport;
    },
  },
});

export const { setSupportCurrencyData } = SupportCurrencySlice.actions;

export const selectSupportCurrency = (state: AppState) => state.supportCurrency;

export const fetchSupportCurrency = (): AppThunk => async (dispatch: any) => {
  const timeoutPromise = (timeout: number) =>
    new Promise((resolve) => setTimeout(resolve, timeout));
  const response = await fetch(
    `https://api.pintu.co.id/v2/wallet/supportedCurrencies`
  );

  const data = await response.json();

  await timeoutPromise(1500);

  dispatch(setSupportCurrencyData(data));
};

export default SupportCurrencySlice.reducer;

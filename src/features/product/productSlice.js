import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DigitsLimited: null,
  TCSCorporation: null,
  BerkshireHathway: null,
  Facebook: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.DigitsLimited = action.payload.DigitsLimited;
      state.TCSCorporation = action.payload.TCSCorporation;
      state.BerkshireHathway = action.payload.BerkshireHathway;
      state.Facebook = action.payload.Facebook;
    },
  },
});

export const { setProduct } = productSlice.actions;

export const selectDigitsLimited = (state) => state.product.DigitsLimited;
export const selectTCSCorporation = (state) => state.product.TCSCorporation;
export const selectBerkshireHathway = (state) => state.product.BerkshireHathway;
export const selectFacebook = (state) => state.product.Facebook;

export default productSlice.reducer;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

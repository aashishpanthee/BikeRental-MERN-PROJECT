import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/features/User/authSlice";
import bikeSlice from "../redux/features/Bikes/bikeSlice";
import cartSlice from "../redux/features/Cart/cartSlice";
import orderSlice from "./features/Order/orderSlice";
import categorySlice from "./features/Category/categorySlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    bike: bikeSlice,
    order: orderSlice,
    category: categorySlice,
  },
});

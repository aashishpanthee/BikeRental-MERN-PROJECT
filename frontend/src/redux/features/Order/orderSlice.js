import { createSlice } from "@reduxjs/toolkit";
import { AddOrder, AllOrderById, AllOrder } from "./orderAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  allOrders: [],
  orderById: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = false;
      state.orderById = null;
    },
  },
  extraReducers: {
    //all the orders by id
    [AddOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [AddOrder.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [AddOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // //all orders
    [AllOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [AllOrder.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allOrders = payload;
    },
    [AllOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //all the orders by id
    [AllOrderById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [AllOrderById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.orderById = payload;
    },
    [AllOrderById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { clearFields } = orderSlice.actions;
export default orderSlice.reducer;

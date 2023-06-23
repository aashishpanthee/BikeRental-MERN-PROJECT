import { createSlice } from "@reduxjs/toolkit";
import { AddOrder, AllOrder, GetOrder, updateStatus } from "./orderAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  orders: [],
  orderById: null,
  userOrders: [],
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
      state.orders = payload;
    },
    [AllOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // //all orders of particular renter
    [GetOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [GetOrder.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userOrders = payload;
    },
    [GetOrder.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // update status of order by admin
    [updateStatus.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updateStatus.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.orders = payload;
      // console.log(state.orders, "hello");
    },
    [updateStatus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //all the orders by id
    // [AllOrderById.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [AllOrderById.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.orderById = payload;
    // },
    // [AllOrderById.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
  },
});
export const { clearFields } = orderSlice.actions;
export default orderSlice.reducer;

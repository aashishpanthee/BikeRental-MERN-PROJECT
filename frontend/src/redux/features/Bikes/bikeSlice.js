import { createSlice } from "@reduxjs/toolkit";
import {
  BikeAll,
  addBike,
  deleteBike,
  editBikeById,
  getBikeById,
  getBikeBySlug,
} from "./bikeAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  bikes: [],
  bikeById: null,
  bikeBySlug: null,
  totalbikes: 0,
};

const bikeSlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = false;
      state.userById = null;
      state.bikeById = null;
    },
  },
  extraReducers: {
    // register bike
    [addBike.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addBike.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
    },
    [addBike.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //all the bikes
    [BikeAll.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [BikeAll.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.bikes = action.payload;
      state.totalbikes = action.payload.total;
    },
    [BikeAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //get bike by slug
    [getBikeBySlug.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBikeBySlug.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bikeBySlug = payload;
    },
    [getBikeBySlug.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //get bike by id
    [getBikeById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBikeById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.bikeById = payload;
    },
    [getBikeById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //update bike
    [editBikeById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editBikeById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [editBikeById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // delete bike
    [deleteBike.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteBike.fulfilled]: (state, action) => {
      const id = action.meta.arg;
      if (id) {
        state.bikes = state.bikes.filter((item) => item._id !== id);
      }
      state.loading = false;
      state.success = true;
    },
    [deleteBike.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { clearFields } = bikeSlice.actions;
export default bikeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  BikeAll,
  addBike,
  deleteBike,
  editBikeById,
  getBikeById,
  getBikeBySlug,
  FilterBikes,
  // getTotal,
  // getBikeList,
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
      state.loading = false;
      state.bikes = action.payload;
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

    // filtered bikes
    [FilterBikes.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [FilterBikes.fulfilled]: (state, action) => {
      state.loading = false;
      state.bikes = action.payload;
    },
    [FilterBikes.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //get  the total count of bikes
    // [getTotal.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [getTotal.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.totalbikes = action.payload;
    // },
    // [getTotal.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },

    //get  the total bikes
    // [getBikeList.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [getBikeList.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.bikes = [...state.bikes, action.payload];
    //   console.log(state.bikes, "in slice");
    // },
    // [getBikeList.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },
  },
});
export const { clearFields } = bikeSlice.actions;
export default bikeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  CategoryAll,
  addCategory,
  deleteCategory,
  editCategoryById,
  getCategoryById,
  getCategoryBySlug,
} from "./categoryAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  categories: [],
  categoryById: null,
  categoryBySlug: null,
};

const categorySlice = createSlice({
  name: "bike",
  initialState,
  reducers: {
    clearFields: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = null;
      state.userById = null;
      state.categoryById = null;
    },
  },
  extraReducers: {
    // Add Category

    [addCategory.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    [addCategory.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      //  category added successful
    },
    [addCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },

    //all the categories
    [CategoryAll.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [CategoryAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
    },
    [CategoryAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //get the category by slug
    // [getCategoryBySlug.pending]: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // [getCategoryBySlug.fulfilled]: (state, { payload }) => {
    //   state.loading = false;
    //   state.categoryBySlug = payload;
    // },
    // [getCategoryBySlug.rejected]: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = payload;
    // },

    //get the category by id
    [getCategoryById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getCategoryById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categoryById = payload;
    },
    [getCategoryById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // update category by id
    [editCategoryById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editCategoryById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [editCategoryById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // delete category
    [deleteCategory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      const id = action.meta.arg;
      if (id) {
        state.categories = state.categories.filter((item) => item._id !== id);
      }
      state.loading = false;
      state.success = true;
    },
    [deleteCategory.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { clearFields } = categorySlice.actions;
export default categorySlice.reducer;

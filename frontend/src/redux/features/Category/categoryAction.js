import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const addCategory = createAsyncThunk(
  "category/add",
  async (categoryData, { rejectWithValue }) => {
    try {
      const data = await Http.post(
        "/api/v1/category/create-category",
        categoryData
      );
      return data.data.category;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const CategoryAll = createAsyncThunk(
  "category/all",
  async (data, { rejectWithValue }) => {
    try {
      const data = await Http.get("/api/v1/category/all");
      return data.data.categories;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getCategoryBySlug = createAsyncThunk(
  "category/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/category/single-category/${id}`);
      return data.data.category;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getCategoryById = createAsyncThunk(
  "category/get",
  async (_id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/category/single-category-id/${_id}`);
      return data.data.category;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const editCategoryById = createAsyncThunk(
  "category/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(
        `/api/v1/category/update-category/${item._id}`,
        item
      );
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.delete(`/api/v1/category/delete-category/${id}`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

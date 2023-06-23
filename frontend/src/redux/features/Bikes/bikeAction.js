import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const addBike = createAsyncThunk(
  "bike/add",
  async (bikesData, { rejectWithValue }) => {
    try {
      const data = await Http.post("/api/v1/bike/add-bike", bikesData);
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const BikeAll = createAsyncThunk(
  "bike/all",
  async (data, { rejectWithValue }) => {
    try {
      const data = await Http.get("/api/v1/bike/all");
      return data.data.bikes;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getBikeBySlug = createAsyncThunk(
  "bike/slug",
  async (slug, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/bike/single-bike/${slug}`);
      return data.data.bike;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getBikeById = createAsyncThunk(
  "bike/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/bike/single-bike/read/${id}`);
      return data.data.bike;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const editBikeById = createAsyncThunk(
  "bike/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(
        `/api/v1/bike/update-bike/${item.id}`,
        item.formdata
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
export const deleteBike = createAsyncThunk(
  "bike/delete",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.delete(`/api/v1/bike/delete-bike/${id}`);
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

// filter bikes
export const FilterBikes = createAsyncThunk(
  "bike/filter",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Http.post(`/api/v1/bike/filter-bikes`, data);
      return response.data.bikes;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// bikes get totalcount
export const getTotal = createAsyncThunk(
  "bike/count",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Http.get(`/api/v1/bike/bikes-count`);
      return response.data.total;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//get bike list per page
export const getBikeList = createAsyncThunk(
  "bike/list",
  async (page, { rejectWithValue }) => {
    try {
      const response = await Http.get(`/api/v1/bike/bike-list/${page}`);
      return response.data.bikes;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

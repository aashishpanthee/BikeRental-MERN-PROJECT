import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const addBike = createAsyncThunk(
  "bike/add",
  async (bikesData, { rejectWithValue }) => {
    try {
      const data = await Http.post("/api/v1/bike/add-bike", bikesData);
      console.log(data.data, "from bike action adding bike");
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
      console.log(data.data.bikes);
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
  "bike/id",
  async (slug, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/bike/single-bike/${slug}`);
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
export const getBikeById = createAsyncThunk(
  "bike/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/bike/single-bike/read/${id}`);
      console.log(data.data, "from bike action");
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
      console.log(data.data, "from edit bikeAction");
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

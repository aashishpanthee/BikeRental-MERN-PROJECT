import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";
import Http from "../../../Helper/Http";

export const userLogin = createAsyncThunk(
  "user/login",
  async (datas, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      };
      const data = await Axios.post(`/api/v1/auth/login`, datas, config);
      localStorage.setItem("userToken", data.data.token);
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

export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json", // Set the Content-Type header to JSON
        },
      };
      const data = await Axios.post(`/api/v1/auth/register`, userData, config);
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
export const forgotPassword = createAsyncThunk(
  "user/forgetpassword",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await Http.post(`/api/v1/auth/forgot-password`, userData);
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

export const userAll = createAsyncThunk(
  "user/all",
  async (allUser, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/auth/getallusers`);
      return data.data.users;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const LoggedInUser = createAsyncThunk(
  "user/me",
  async (alluser, { rejectWithValue }) => {
    try {
      const data = await Http.get("/api/v1/auth/me");
      return data.data.user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const getUserById = createAsyncThunk(
  "user/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/user/userById/${id}`);
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
export const editUserById = createAsyncThunk(
  "user/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(`/user/${item.id}`, item.formdata);
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

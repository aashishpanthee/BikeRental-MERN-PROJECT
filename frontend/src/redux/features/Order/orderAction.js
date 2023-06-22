import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";

export const AllOrder = createAsyncThunk(
  "order/all",
  async (alluser, { rejectWithValue }) => {
    try {
      const data = await Http.get("/rent/bike");
      console.log(data.data, "orderAction");
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
export const AllOrderById = createAsyncThunk(
  "order/getById",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/rent/bike/${id}`);
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

/* export const AllOrderUser = createAsyncThunk(
  "order/user/all",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/userservice/user/${id}`);
      return data.data.rows;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
); */

/* export const EditOrderStatus = createAsyncThunk(
  "order/edit/id",
  async (item, { rejectWithValue }) => {
    try {
      const statusData = {
        status: item.status,
      };
      const data = await Http.patch(
        `/userorder/update/${item.id}`,
        statusData
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
); */
export const AddOrder = createAsyncThunk(
  "order/add/",
  async (formData, { rejectWithValue }) => {
    try {
      const data = await Http.post("/api/v1/order/make-order", formData);
      console.log(data.data.order, "orderaction");
      return data.data.order;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// orders of particular renter
export const GetOrder = createAsyncThunk(
  "order/get",
  async (allUser, { rejectWithValue }) => {
    try {
      const data = await Http.get("/api/v1/order/orders");
      return data.data.orders;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

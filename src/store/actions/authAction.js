import axios from "axios";
import API from "../../utils/api-config/api-config";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = API.signup;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      });
      if (!response.ok) {
        throw new Error("Registration failed");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      if (error.response && error.response.data.message) {
        console.error("Login error:", error);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

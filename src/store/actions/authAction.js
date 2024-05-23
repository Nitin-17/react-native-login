import { LOGIN_REQUEST } from "./types";
import { LOGIN_SUCCESS } from "./types";
import { LOGIN_FAILURE } from "./types";

export const login = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials, // Pass login credentials (username/email, password)
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user, // User data received from the server (optional)
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error, // Error message from the server (optional)
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "./api/authApi";
import { getToken, saveToken, getDetails } from "../../../utils/cart";

const initialState = {
  username: "",
  token: getToken(),
  email: "",
  details:
    typeof window !== "undefined"
      ? localStorage.getItem("details")
        ? JSON.parse(localStorage.getItem("details"))
        : []
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addDetails(state, action) { 
      state.details.push(action.payload);
      localStorage.setItem(JSON.stringify("details", action.payload));
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      registerApi.endpoints.addLogin.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.token = payload.jwt;
        state.username = payload.user.username;
        state.email = payload.user.email;
        saveToken(payload.jwt);
      }
    );
  },
});

export const selectUser = (state) => state;
export const { addDetails } = userSlice.actions;
export default userSlice.reducer;

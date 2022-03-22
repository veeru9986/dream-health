import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "./api/authApi";

const initialState = {
  username: "",
  token:
    typeof window !== "undefined"
      ? sessionStorage.getItem("token")
        ? JSON.parse(sessionStorage.getItem("token"))
        : ""
      : null,
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      registerApi.endpoints.addLogin.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.token = payload.jwt;
        state.username = payload.user.username;
        state.email = payload.user.email;
      }
    );
  },
});

export const selectUser = (state) => state;
export default userSlice.reducer;

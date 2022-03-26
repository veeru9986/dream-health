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
      const index = state.details.findIndex(
        (item) => item.name === action.payload.name
      );
      console.log("index", index);

      if (index >= 0 || state.details.length) {
        state.details[index >= 0 ? index : 0].name = action.payload.name;
        state.details[index >= 0 ? index : 0].tests = action.payload.tests;
        state.details[index >= 0 ? index : 0].email = action.payload.email;
        state.details[index >= 0 ? index : 0].mobile = action.payload.mobile;
        state.details[index >= 0 ? index : 0].time = action.payload.time;
        state.details[index >= 0 ? index : 0].date = action.payload.date;
        state.details[index >= 0 ? index : 0].age = action.payload.age;
        state.details[index >= 0 ? index : 0].gender = action.payload.gender;
      } else if (state.details.length <= 1) {
        state.details.push(action.payload);
      }
      localStorage.setItem("details", JSON.stringify(state.details));
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

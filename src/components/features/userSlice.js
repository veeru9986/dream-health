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
      if (index >= 1) {
        state.details[index].name = action.payload.name;
        state.details[index].tests = action.payload.tests;
        state.details[index].email = action.payload.email;
        state.details[index].mobile = action.payload.mobile;
        state.details[index].time = action.payload.time;
        state.details[index].date = action.payload.date;
        state.details[index].age = action.payload.age;
        state.details[index].gender = action.payload.gender;

      } else {
        state.details.push(action.payload);
        localStorage.setItem("details", JSON.stringify(state.details));
      }
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

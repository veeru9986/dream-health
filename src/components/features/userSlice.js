import { createSlice } from "@reduxjs/toolkit";
import { saveToken, saveUser } from "../../../utils/cart";
import { registerApi } from "./api/authApi";

const checkWindow = typeof window !== "undefined";

const initialState = {
  token: checkWindow
    ? sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : ""
    : null,

  email: "",
  sessionId:
    typeof window !== "undefined"
      ? sessionStorage.getItem("sessionId")
        ? JSON.parse(sessionStorage.getItem("sessionId"))
        : ""
      : null,
  details:
    typeof window !== "undefined"
      ? localStorage.getItem("details")
        ? JSON.parse(localStorage.getItem("details"))
        : []
      : null,
};

export const userSlice = createSlice({
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
        state.details[index >= 0 ? index : 0].price = action.payload.price;
        state.details[index >= 0 ? index : 0].cartQuantity =
          action.payload.cartQuantity;
        state.details[index >= 0 ? index : 0].data = action.payload.data;
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
        console.log("payload", payload);
        state.token = payload.jwt;
        state.email = payload.user.email;
        saveToken(payload.jwt);
      }
    );
  },
});

export const { addDetails } = userSlice.actions;
export default userSlice.reducer;

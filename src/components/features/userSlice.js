import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerApi } from "./api/authApi";
import { getToken, saveToken} from "../../../utils/cart";

const initialState = {
  username: "",
  token: getToken(),
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
        saveToken(payload.jwt)
      }
    );
  },
});

export const selectUser = (state) => state;
export default userSlice.reducer;

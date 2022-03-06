import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const signupUser = createAsyncThunk(
  "users/signupUser",
  async ({ fName, email, pass }, { rejectWithValue }) => {
    console.log(email);
    try {
      const response = await fetch(
        `${process.env.STRAPI_API_URL}/api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: fName,
            email: email,
            password: pass,
          }),
        }
      );
      let data = await response.json();
      console.log("data", data);
      if (response.status === 200) {
        console.log(data);
        sessionStorage.setItem("token", data.jwt);
        return {
          ...data,
          username: data.user.username,
          email: data.user.email,
        };
      } else {
        return rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e);
      return rejectWithValue(e.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
    },
    [signupUser.pending]: (state) => {
      state.isFetching = true;
    },
    [signupUser.rejected]: (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const userSelector = (state) => state.user;
export default userSlice.reducer;

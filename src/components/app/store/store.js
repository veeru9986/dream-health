import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "../../features/api/authApi";
import authReducer from "../../features/userSlice";
import { combineReducers } from "redux";

import cartReducer from "../../features/cartSlice";

const rootReducer = combineReducers({
  [registerApi.reducerPath]: registerApi.reducer,

  user: authReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware),
});

export default store;

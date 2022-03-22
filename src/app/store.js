import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { registerApi } from "../features/api/authApi";
import userReducer from "../features/userSlice";

const rootReducer = combineReducers({
  [registerApi.reducerPath]: registerApi.reducer,

  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware),
});

export default store;

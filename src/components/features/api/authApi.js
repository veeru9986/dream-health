import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "isomorphic-fetch";
import { useSelector } from "react-redux";
import store from "../../app/store";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.STRAPI_API_URL}/api/`,
    prepareHeaders: (headers) => {
      console.log(store.getState().user.token);
      const token = store.getState().user.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addRegister: builder.mutation({
      query: (user) => ({
        url: "/auth/local/register",
        method: "POST",
        body: user,
      }),
    }),
    addLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/local",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useAddRegisterMutation, useAddLoginMutation } = registerApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "isomorphic-fetch";
import store from "../../app/store/store";
import { getToken } from "../../../../utils/cart";

export const registerApi = createApi({
  reducerPath: "registerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.STRAPI_API_URL}/api/`,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [`User`],
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
    addOrderDetails: builder.mutation({
      query: (credentials) => ({
        url: "/orders",
        method: "POST",
        body: credentials,
      }),
    }),
    orderSuccess: builder.mutation({
      query: (credentials) => ({
        url: "/orders/success",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useAddRegisterMutation,
  useAddLoginMutation,
  useAddOrderDetailsMutation,
  useOrderSuccessMutation,
} = registerApi;

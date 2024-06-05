import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/user/" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `register/`,
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `login/`,
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    createProduct: builder.mutation({
      query: (data) => {

        const accessToken = localStorage.getItem("accessToken");
        console.log("token at create-product", accessToken);
        console.log("login at api: ", data);
        return {
          url: `create-product/`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
    createCategory: builder.mutation({
      query: (data) => {
        const accessToken = localStorage.getItem("accessToken");
        console.log("token at create-product", accessToken);
        console.log("login at api: ", data);
        return {
          url: `create-category/`,
          method: "POST",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
    getAllCategory: builder.query({
      query: () => {
        console.log("get all category called at store");
        const accessToken = localStorage.getItem("accessToken");
        console.log("token at getAllCategory", accessToken);
        return {
          url: "get-category/",
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
    getAllProduct: builder.query({
      query: () => {
        // console.log("get all category called at store");
        const accessToken = localStorage.getItem("accessToken");
        // console.log("token at getAllCategory", accessToken);
        return {
          url: "get-product/",
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useCreateProductMutation,
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useGetAllProductQuery,
} = authApi;

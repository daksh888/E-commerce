import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/user/' }),
  endpoints: (builder) => ({
    register: builder.mutation({
        query: (data) => {
        //  console.log("Create Post: ", data)
         return {
          url: `register/`,
          method: 'POST',
          body:data,
          headers: {
           'Content-type': 'application/json; charset=UTF-8',
          }
         }
        }
       }),
    login: builder.mutation({
        query: (data) => {
         console.log("login at api: ", data)
         return {
          url: `login/`,
          method: 'POST',
          body:data,
          headers: {
           'Content-type': 'application/json; charset=UTF-8',
          }
         }
        }
       }),
  }),
})


export const { useRegisterMutation, useLoginMutation } = authApi


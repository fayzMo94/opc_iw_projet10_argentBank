import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userApi = createApi({
  reducerPath: "userData",
  baseQuery: fetchBaseQuery({ baseUrl: "localhost:3001/api/v1" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/user/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }),
    }),

    signupUser: builder.mutation({
      query: ({ email, password, firstName, lastName, userName }) => ({
        url: "/user/signup",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          userName,
        }),
      }),
    }),

    editUserName: builder.mutation({
      query: ({ userName }) => ({
        url: "/user/profile",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName }),
      }),
    })
  }),
});

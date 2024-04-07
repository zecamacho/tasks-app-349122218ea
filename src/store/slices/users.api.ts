import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./users.schema";

type Response = { users: User[]; limit: number; skip: number; total: number };

export const usersSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<Response, void>({
      query: () => "users",
      providesTags: ["User"],
    }),
    getUser: builder.query<User, { id: string | undefined }>({
      query: ({ id }) => {
        console.log("ID:", id);
        return `users/${id}`;
      },
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = usersSlice;

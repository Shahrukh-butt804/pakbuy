import {
  createApi
} from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: makeBaseQueryWith401Handler(""),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;

export type Post = {
  id: number;
  title: string;
  body: string;
};

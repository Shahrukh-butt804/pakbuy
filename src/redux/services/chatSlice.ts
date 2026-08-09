import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const chatSlice = createApi({
  reducerPath: "chatSlice",
  baseQuery: makeBaseQueryWith401Handler("/chat"),
  endpoints: (builder) => ({
    chat: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useChatMutation } = chatSlice;

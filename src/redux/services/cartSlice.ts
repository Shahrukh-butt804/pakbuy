import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const cartSlice = createApi({
  reducerPath: "cartSlice",
  baseQuery: makeBaseQueryWith401Handler("/cart"),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getMyCart: builder.query({
      query: () => "/",
      transformResponse: (response: any) => response?.cart,
      providesTags: ["cart"],
    }),

    addToCart: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["cart"],
    }),

    updateCart: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["cart"],
    }),

    deleteFromCart: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const {
  useGetMyCartQuery,
  useAddToCartMutation,
  useUpdateCartMutation,
  useDeleteFromCartMutation,
} = cartSlice;

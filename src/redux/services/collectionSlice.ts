import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api";

export const collectionSlice = createApi({
    reducerPath: "collectionSlice",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/collections", credentials: 'include' }),
    endpoints: (builder) => ({
        getAllCollection: builder.query({
            query: () => "/get-all-collection",
            transformResponse: (response: any) => response.collections,
        }),

    }),
});

export const { useGetAllCollectionQuery } = collectionSlice;


import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const collectionSlice = createApi({
    reducerPath: "collectionSlice",
    baseQuery: makeBaseQueryWith401Handler("/collections"),
    endpoints: (builder) => ({
        getAllCollection: builder.query({
            query: () => "/get-all-collection",
            transformResponse: (response: any) => response.collections,
        }),

    }),
});

export const { useGetAllCollectionQuery } = collectionSlice;


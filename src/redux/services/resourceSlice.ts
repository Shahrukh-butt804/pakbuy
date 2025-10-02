import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const resourceSlice = createApi({
    reducerPath: "resourceSlice",
    baseQuery: makeBaseQueryWith401Handler("/resource"),
    endpoints: (builder) => ({
        getAllResources: builder.query({
            query: () => "/get-all-resources",
             transformResponse: (response: any) => response.resources,
        }),

    }),
});

export const { useGetAllResourcesQuery } = resourceSlice;


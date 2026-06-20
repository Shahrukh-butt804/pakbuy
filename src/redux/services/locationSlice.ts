import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { prepareHeaders } from "../prepareHeader/preapareHeader";

export const locationSlice = createApi({
  reducerPath: "locationSlice",
  baseQuery: fetchBaseQuery({
         baseUrl: "https://countriesnow.space/api/v0.1/",
         prepareHeaders,
        }),
  endpoints: (builder) => ({
    getAllStates: builder.query({
      query: () => "/countries/states",
      transformResponse: (response: any) =>
        response.data.find((c: any) => c.name === "United States").states,
    }),

    getCitiesByState: builder.mutation({
      query: (stateName) => ({
        url: "countries/state/cities",
        method: "POST",
        body: { country: "United States", state: stateName },
      }),
    }),
  }),
});

export const { useGetAllStatesQuery, useGetCitiesByStateMutation } =
  locationSlice;

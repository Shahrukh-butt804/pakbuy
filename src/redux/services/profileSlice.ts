import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api";

export const profileSlice = createApi({
    reducerPath: "profileSlice",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/profile", credentials: 'include' }),
    endpoints: (builder) => ({
        getMyProfile: builder.query({
            query: () => "/my-profile",
        }),
        updateProfile: builder.mutation({
            query: (body) => ({
                url: "/update-profile",
                method: "PUT",
                body,
            }),
        })
    }),
});

export const { useGetMyProfileQuery, useUpdateProfileMutation } = profileSlice;


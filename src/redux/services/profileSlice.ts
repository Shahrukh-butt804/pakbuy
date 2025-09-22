import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const profileSlice = createApi({
    reducerPath: "profileSlice",
    baseQuery: makeBaseQueryWith401Handler("/profile"),
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


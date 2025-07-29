import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/auth", credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
        }),

        register: builder.mutation({
            query: (formData) => ({
                url: "/signup",
                method: "POST",
                body: formData,
            }),
        }),

        forgetPassword: builder.mutation({
            query: (body) => ({
                url: "/forgot-password",
                method: "POST",
                body,
            }),
        }),

        verifyOtp: builder.mutation({
            query: (body) => ({
                url: "/verify-otp",
                method: "POST",
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: "/reset-password",
                method: "POST",
                body,
            }),
        }),


        



    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useForgetPasswordMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
} = authSlice

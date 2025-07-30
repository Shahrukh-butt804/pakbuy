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
                body: { ...body, role: "user" },
            }),
        }),

        register: builder.mutation({
            query: (formData) => ({
                url: "/signup",
                method: "POST",
                body: formData,
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST",
            }),
        }),

        forgetPassword: builder.mutation({
            query: (body) => ({
                url: "/forgot-password",
                method: "POST",
                body: { ...body, role: "user" },
            }),
        }),

        verifyOtp: builder.mutation({
            query: (body) => ({
                url: "/verify-otp",
                method: "POST",
                body: { ...body, role: "user" },
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: "/reset-password",
                method: "POST",
                body: { ...body, role: "user" },
            }),
        }),






    }),
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useForgetPasswordMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
} = authSlice

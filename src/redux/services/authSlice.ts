import { createApi } from '@reduxjs/toolkit/query/react';
import { makeBaseQueryWith401Handler } from '../../utils/Functions';

export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: makeBaseQueryWith401Handler("/auth"),
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


        changePassword: builder.mutation({
            query: (body) => ({
                url: "/change-password",
                method: "POST",
                body,
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
    useChangePasswordMutation
} = authSlice

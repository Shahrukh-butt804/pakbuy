import { createApi } from '@reduxjs/toolkit/query/react';
import { makeBaseQueryWith401Handler } from '../../utils/Functions';

export const orderSlice = createApi({
    reducerPath: 'orderSlice',
    baseQuery: makeBaseQueryWith401Handler("/order"),

    endpoints: (builder) => ({

        getStripeKey: builder.query({
            query: () => ({
                url: "/get-stripe-keys",
                method: "GET",
            }),
            transformResponse: (response: any) => response?.publishableKey
        }),

        createOrder: builder.mutation({
            query: (body) => ({
                url: "/create-order",
                method: "POST",
                body,
            }),
        }),

        getOrderById: builder.query({
            query: ({id}) => ({
                url: `/get-order-by-id/${id}`,
                method: "GET",
            }),
            transformResponse: (response: any) => response?.order
        }),
        getOrderByUser: builder.query({
            query: () => ({
                url: `/get-order-by-user`,
                method: "GET",
            }),
            transformResponse: (response: any) => response?.orders
        })

    }),
})

export const {
    useGetStripeKeyQuery,
    useCreateOrderMutation,
    useGetOrderByIdQuery,
    useGetOrderByUserQuery
} = orderSlice

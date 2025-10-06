import { createApi } from '@reduxjs/toolkit/query/react';
import { makeBaseQueryWith401Handler } from '../../utils/Functions';

export const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: makeBaseQueryWith401Handler("/products"),
    tagTypes: ['product'],
    endpoints: (builder) => ({

        getAllProducts: builder.query({
            query: () => ({
                url: "/get-all-products",
                method: "GET",
            }),
            transformResponse: (response: any) => response?.packages,
        }),


    }),
})

export const {
    useGetAllProductsQuery
} = productSlice

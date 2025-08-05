import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const productSlice = createApi({
    reducerPath: 'productSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/products", credentials: 'include' }),
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

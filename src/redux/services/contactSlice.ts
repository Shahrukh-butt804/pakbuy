import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const contactSlice = createApi({
    reducerPath: 'contactSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/contact-us", credentials: 'include' }),
    tagTypes: ['product'],
    endpoints: (builder) => ({

        submitForm: builder.mutation({
            query: (body) => ({
                url: "/send-contact",
                method: "POST",
                body,
            }),
        }),


    }),
})

export const {
    useSubmitFormMutation
} = contactSlice

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const eventSlice = createApi({
    reducerPath: 'eventSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/event-registration", credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        
        event: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
        }),


    }),
})

export const {
    useEventMutation
} = eventSlice

import { createApi } from '@reduxjs/toolkit/query/react';
import { makeBaseQueryWith401Handler } from '../../utils/Functions';

export const contactSlice = createApi({
    reducerPath: 'contactSlice',
    baseQuery: makeBaseQueryWith401Handler("/contact-us"),
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

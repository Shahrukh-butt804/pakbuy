import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api";

export const newsLetterSlice = createApi({
    reducerPath: "newsLetterSlice",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/news-letter", credentials: 'include' }),
    endpoints: (builder) => ({

        addToNewsLetter: builder.mutation({
            query: (body) => ({
                url: "/add-to-news-letter",
                method: "POST",
                body,
            }),
        })
    }),
});

export const { useAddToNewsLetterMutation } = newsLetterSlice;


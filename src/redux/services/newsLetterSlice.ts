import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const newsLetterSlice = createApi({
    reducerPath: "newsLetterSlice",
    baseQuery: makeBaseQueryWith401Handler("/news-letter"),
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


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants/api";

export const couponSlice = createApi({
    reducerPath: "couponSlice",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/coupons", credentials: 'include' }),
    endpoints: (builder) => ({
        validateCoupon: builder.mutation({
            query: (body) => ({
                url: "/validate-coupon",
                method: "POST",
                body,
            }),
        })
    }),
});

export const { useValidateCouponMutation } = couponSlice;


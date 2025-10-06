import { createApi } from "@reduxjs/toolkit/query/react";
import { makeBaseQueryWith401Handler } from "../../utils/Functions";

export const couponSlice = createApi({
    reducerPath: "couponSlice",
    baseQuery: makeBaseQueryWith401Handler("/coupons"),
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


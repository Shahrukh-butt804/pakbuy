import { FetchArgs, fetchBaseQuery, FetchBaseQueryError, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/api";

export const ImageUrl = (image: string) => {
    const { hostname } = window.location;

    var basename = "/"
    if (hostname.includes("react.customdev.solutions")) {
        basename = "/choosewell/"
    }
    basename;

    return `${basename}images/${image}`;
};


export const makeBaseQueryWith401Handler = (urlSuffix: string) => {
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: BASE_URL + urlSuffix,
        credentials: 'include',
    });

    const baseQueryWith401Handler: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
        args,
        api,
        extraOptions
    ) => {
        const result : any = await rawBaseQuery(args, api, extraOptions);
        if (result.error?.status === 401 && result.error?.data?.message === "User is blocked") {
            Swal.fire("Error", result.error.data.message, "error");
        }
        return result;
    };

    return baseQueryWith401Handler;
};


export const amountFormatter = (amount: any) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

export const numberFormatter = (amount: number) => {
  return amount.toLocaleString("en-US", {
    // style: "currency",
    // currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
};

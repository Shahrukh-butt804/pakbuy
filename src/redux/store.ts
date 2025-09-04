import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./services/apiSlice";
import { authSlice } from "./services/authSlice";
import { eventSlice } from "./services/eventSlice";
import { productSlice } from "./services/productSlice";
import userReducer from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";
import modalReducer from "./reducers/modalSlice";
import { orderSlice } from "./services/orderSlice";
import { profileSlice } from "./services/profileSlice";
import { contactSlice } from "./services/contactSlice";
import { newsLetterSlice } from "./services/newsLetterSlice";
import { couponSlice } from "./services/couponSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
    [authSlice.reducerPath]: authSlice.reducer,
    [eventSlice.reducerPath]: eventSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    [orderSlice.reducerPath]: orderSlice.reducer,
    [profileSlice.reducerPath]: profileSlice.reducer,
    [contactSlice.reducerPath]: contactSlice.reducer,
    [newsLetterSlice.reducerPath]: newsLetterSlice.reducer,
    [couponSlice.reducerPath]: couponSlice.reducer,
    user: userReducer,
    cart: cartReducer,
    modal: modalReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, authSlice.middleware, eventSlice.middleware).concat(productSlice.middleware).concat(orderSlice.middleware).concat(profileSlice.middleware).concat(contactSlice.middleware).concat(newsLetterSlice.middleware).concat(couponSlice.middleware), // Add RTK Query middleware
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

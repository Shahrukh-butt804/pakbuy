import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./services/apiSlice";
import { authSlice } from "./services/authSlice";
import { eventSlice } from "./services/eventSlice";
import { productSlice } from "./services/productSlice";
import userReducer from "./reducers/userSlice";
import cartReducer from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
    [authSlice.reducerPath]: authSlice.reducer,
    [eventSlice.reducerPath]: eventSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
    user: userReducer,
    cart: cartReducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, authSlice.middleware, eventSlice.middleware).concat(productSlice.middleware), // Add RTK Query middleware
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

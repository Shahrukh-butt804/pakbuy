import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from "./services/apiSlice";
import { authSlice } from "./services/authSlice";
import { eventSlice } from "./services/eventSlice";
import userReducer from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API slice reducer
    [authSlice.reducerPath]: authSlice.reducer,
    [eventSlice.reducerPath]: eventSlice.reducer,
    user: userReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, authSlice.middleware, eventSlice.middleware), // Add RTK Query middleware
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

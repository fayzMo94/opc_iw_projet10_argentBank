import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice";
import { userApi } from "./service/apiData";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);

// **  Middleware**: Enhances the Redux store's capabilities.
// **  productsApi.middlewrae** is added to the default middleware, enabling additional functionality like caching, invalidation, polling, and more for API calls.

// **  setupListeners(store.dispatch)**: This function is used to set up the listeners for the API endpoints. It listens for actions dispatched by the API endpoints and updates the store accordingly.
// **: The setupListeners function automatically refetches data when certain events occur, such as when a mutation is dispatched or when a query is invalidated.

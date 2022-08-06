import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/authorization";
import bookReducer from "./Slices/books";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: bookReducer,
  },
});

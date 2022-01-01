import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slice/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
});
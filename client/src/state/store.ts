import { configureStore } from "@reduxjs/toolkit";
import toggleComponent from "./toggleComponent/toggleComponent";

export const store = configureStore({
    reducer: {
        toggle: toggleComponent
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";

//  Redux store with the contacts reducer
export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

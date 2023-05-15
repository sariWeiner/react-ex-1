import {configureStore} from "@reduxjs/toolkit";
import ButtonSlice from './ButtonSlice'

export const store = configureStore({
    reducer: {
        image: ButtonSlice,
    },
})
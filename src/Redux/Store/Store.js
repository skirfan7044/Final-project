import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../AllSlice/User";
import viewSlice from "../AllSlice/View";


const Store = configureStore({
    reducer: {
        comp:viewSlice,
        user:UserSlice
    }
})

export default Store;
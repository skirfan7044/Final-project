import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../AllSlice/User";
import AdminSlice from "../AllSlice/View";


const Store = configureStore({
    reducer: {
        comp:AdminSlice,
        user:UserSlice
    }
})

export default Store;
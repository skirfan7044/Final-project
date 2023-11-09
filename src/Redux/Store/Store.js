import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../AllSlice/User";

const Store = configureStore({
    reducer: {
        user:UserSlice
    }
})

export default Store;
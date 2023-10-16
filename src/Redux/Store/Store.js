import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../AllSlice/User";
import ViewSlice from "../AllSlice/View";


const Store = configureStore({
    reducer: {
        comp:ViewSlice,
        user:UserSlice
    }
})

export default Store;
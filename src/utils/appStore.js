import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'

// configure the store usign redux 

const appStore= configureStore({
    reducer:{
        user: userReducer
    },
});

export default appStore;
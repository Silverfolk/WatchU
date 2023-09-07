import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from "./movieSlice"
// configure the store usign redux 

const appStore= configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer
    },
});

export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from "./movieSlice"
import GPTReducer from "./GPTReducer";
import appconfigSlice from "./appconfigSlice";
// configure the store usign redux 

const appStore= configureStore({
    reducer:{
        user: userReducer,
        movies: movieReducer,
        GPT:GPTReducer,
        appConfig:appconfigSlice
    },
});

export default appStore;
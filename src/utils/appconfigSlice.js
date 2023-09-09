import { createSlice } from "@reduxjs/toolkit";

const appconfigSlice=createSlice({
    name:"appconfig",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage(state,action){
            state.lang=action.payload;
        }
    }

});

export const {changeLanguage}=appconfigSlice.actions;
export default appconfigSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

type loginPasswordSlicerProps = {
    emailPassword:String
}

const initialState:loginPasswordSlicerProps = {
    emailPassword:"",
}

export const loginPasswordSlicer =  createSlice({
    name:"login",
    initialState,
    reducers:{
        setEmailPassword:(state,action)=>{
            state.emailPassword = action.payload
        }
    }
})


export const {setEmailPassword} = loginPasswordSlicer.actions;


export default loginPasswordSlicer.reducer

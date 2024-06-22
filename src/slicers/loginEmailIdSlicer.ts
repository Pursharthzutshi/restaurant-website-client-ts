import { createSlice } from "@reduxjs/toolkit";

type loginEmailIdSlicerProps = {
    emailId: string
    savedEmailID:any
}

const initialState: loginEmailIdSlicerProps = {
    emailId: "",
    savedEmailID: localStorage.getItem(("loggedInEmailID"))
}

export const loginEmailIdSlicer = createSlice({
    name: "login",
    initialState,
    reducers: {
        setEmailId: (state, action) => {
            state.emailId = action.payload
        },
        setSavedLoggedInEmailId: (state, action) => {
            console.log(action.payload)
            state.savedEmailID = action.payload
            state.savedEmailID = localStorage.setItem("loggedInEmailID", action.payload)

    }
    }
})



export const { setEmailId,setSavedLoggedInEmailId } = loginEmailIdSlicer.actions;


export default loginEmailIdSlicer.reducer

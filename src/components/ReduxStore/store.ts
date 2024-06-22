
// import BoardSlicer from "../components/slicers/BoardSlicer";
// import counterSlice from "./slices/counter";

import { configureStore } from "@reduxjs/toolkit";
import LoginSlicer from "../../slicers/LoginSlicer";
import loginEmailIdSlicer from "../../slicers/loginEmailIdSlicer";
import loginPasswordSlicer from "../../slicers/loginPasswordSlicer";
import SignUpSlicer from "../Register/SignUpSlicer";
import CartFunctionalitySlicer from "../../slicers/CartFunctionalitySlicer";

export const store = configureStore({
  reducer: {
    // orderDetails:OrderDetailsSlicer,
    loginEmailId: loginEmailIdSlicer,
    loginPassword: loginPasswordSlicer,
    login: LoginSlicer,
    signup: SignUpSlicer,
    CartFunctionalitySlicer:CartFunctionalitySlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import React from "react";
import axios from "axios"
import {useState,useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import "../Register/LogInPage.css"

import { setEmailId } from "../../slicers/loginEmailIdSlicer";
import { setEmailPassword } from "../../slicers/loginPasswordSlicer";
import { loginCredentials } from "../../slicers/LoginSlicer";
import { useAppDispatch, useAppSelector } from "../ReduxHooks";
import { setSavedLoggedInEmailId } from "../../slicers/loginEmailIdSlicer";

type logInPageProps = {
    setUserName: React.Dispatch<React.SetStateAction<string>>
}

function LogInPage({setUserName}:logInPageProps){

    const signUpMessage = useAppSelector((state)=>state.signup.signUpMessage)

    const [redirectHomePage,setRedirectHomePage] = useState(false);
    const [logInErrorMessage,setLogInErrorMessage] = useState("");

    const emailId = useAppSelector((state)=>state.loginEmailId.emailId)
    const emailPassword = useAppSelector((state)=>state.loginPassword.emailPassword)
    const logInErrorMessageBox = useAppSelector((state:any)=>state.login.logInErrorMessageBox)
    
    const dispatch = useAppDispatch();
    useEffect(()=>{
        console.log(logInErrorMessageBox)
    })

    const logIn = (e: { preventDefault: () => void; })=>{
        // console.log(emailPassword);
        e.preventDefault();    
        axios.post(`http://localhost:3001/Registration/login`,({logInEmailID:emailId,LogInPassword:emailPassword})).then((response)=>{
     
        if(response.data.message){
                localStorage.setItem("showLogOutButton","false")        
                dispatch(setSavedLoggedInEmailId(""))
                dispatch(loginCredentials(false))
                setLogInErrorMessage(response.data.message);
            }else{
                localStorage.setItem("showLogOutButton","true")
                dispatch(setSavedLoggedInEmailId(emailId))
                dispatch(loginCredentials(true))
                setUserName(response.data.data[0].name)
                // setLoggedInEmailID(response.data.data[0].emailID)
            }
        })
    }


    return(
        <div className="login-page">


<div>
<br></br>


{
    signUpMessage && <p>Signed Up successfully</p>
}

</div>

            <form className="login-page-form" onSubmit = {logIn}>
                <h4>Login </h4>

                <input onChange={(e)=>{dispatch(setEmailId(e.target.value))}} placeholder="Email-id" type="text"/>
                
                <input onChange={(e)=>{dispatch(setEmailPassword(e.target.value))}} placeholder="Password" type="password"/>
                <div>
                <button onClick={logIn}>Log In</button>
                <p className="or">OR</p>
                <Link  className="sign-up-button" to="/signUpPage">Sign Up</Link>
           
                {
                 logInErrorMessageBox &&
                <div className="login-error-message-box">
                    <p className="login-error-message">{logInErrorMessage}</p>
                    </div> 
                }
                </div>
            </form>
        </div>
            )
}

export default LogInPage;
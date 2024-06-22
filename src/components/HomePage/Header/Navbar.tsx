import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import axios from "axios";
import { loginCredentials } from "../../../slicers/LoginSlicer";
import { setEmailId } from "../../../slicers/loginEmailIdSlicer";
import { setEmailPassword } from "../../../slicers/loginPasswordSlicer";
import { useAppDispatch, useAppSelector } from "../../ReduxHooks";
import { setClearCart } from "../../../slicers/CartFunctionalitySlicer";

// import headerLogoDiv from "../../../images/burger.png"

const headerLogoDiv = require("../../../images/burger.png")
type NavBarProps = {
    setViewOrdersPageDetails: React.Dispatch<React.SetStateAction<string>>
    setShowCartPaymentPage: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ setShowCartPaymentPage }: NavBarProps) {


    const cartItems = useAppSelector((state) => state.CartFunctionalitySlicer.cartItems)

    const showLogOutButton = useAppSelector((state: any) => state.login.showLogOutButton)

    // const emailId = useAppSelector(state=>state.loginSlicer.emailId)
    // const emailPassword = useAppSelector(state=>state.passwordSlicer.emailPassword)
    const dispatch = useAppDispatch();

    const logOutSession = () => {
        axios.get("http://localhost:3001/Registration/logout").then((res) => {
            console.log(res)

        })

        dispatch(setClearCart([]))

        // localStorage.setItem("loggedInEmailID", null)
        localStorage.setItem("showLogOutButton", "false")
        dispatch(loginCredentials(false));
        // loggedInButtonState = JSON.parse(localStorage.getItem("showLogOutButton"))
        dispatch(setEmailId(""))
        dispatch(setEmailPassword(""))
    }

    return (
        <nav className="header-nav-bar">
            <ul className="header-nav-bar-links-div">

                <Link className="header-logo-div" to="/">
                    <img src={headerLogoDiv}/>
                    <h3>TasteBuds Delight</h3>
                </Link>
            </ul>
            <div className="header-nav-button-container">

                {
                    showLogOutButton &&

                    <div className="cart-logout-button-div">
                        <Link className="order-button" to="/orderPurchasedPage">Order</Link>
                        <Link className="cart-button" onClick={() => { setShowCartPaymentPage(true) }} to="/paymentCartPage">Cart {cartItems.length}</Link>
                        <Link to="/" onClick={logOutSession} className="log-out-button">Log Out</Link>
                    </div>

                }
            </div>
        </nav>
    )
}

export default Navbar
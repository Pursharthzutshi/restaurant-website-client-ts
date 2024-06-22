import React from "react";
import QRCode from 'qrcode.react';
import "../Header/Header.css"


import { Link } from 'react-router-dom';
import { useAppSelector } from "../../ReduxHooks";
const  headerContentImage = require("../../../images/image-from-rawpixel-id-6121211-png.png")
const headerContentImageTwo = require( "../../../images/image-from-rawpixel-id-3282840-jpeg.jpg")
const headerContentImageThree = require("../../../images/image-from-rawpixel-id-7733248-png.png")

function Header() {
    const showLogOutButton = useAppSelector((state) => state.login.showLogOutButton)
    const cartItems = useAppSelector((state) => state.CartFunctionalitySlicer.cartItems)

    return (
        <section className="header-section">

            <div className="header-content-container">

                <div className="header-content-image-div">
                    <img src={headerContentImage} />
                    <img src={headerContentImageTwo} />
                    <img src={headerContentImageThree} />
                </div>

                <div className="header-content-heading-button-div">
                    <h2><span>Welcome </span>to TasteBuds Delight!, <br></br>Indulge in a culinary journey like no other with TasteBuds Delight.</h2>


                    <QRCode value="https://restaurant-website-catalog-menu-page-mobile.vercel.app/" />

                    <p>Scan QR code to view menu</p>

                    <Link  className="order-login-button" to="/orderNowPage">
                        {
                            showLogOutButton ? <p className="order-now-button">Order Now</p> : <p className="login-button">Log In to Order Now</p>
                        }

                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Header;
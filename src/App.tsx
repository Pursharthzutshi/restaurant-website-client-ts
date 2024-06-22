import "./App.css";
import { Routes, Route } from "react-router-dom";
import CatalogMenuPage from "./components/CatalogMenuPage/CatalogMenuPage";
import HomePage from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import ShowCartPaymentPage from "./components/CatalogMenuPage/ShowCartPaymentPage";
import Navbar from "./components/HomePage/Header/Navbar";
import SignUpPage from "./components/Register/SignUpPage";
import LogInPage from "./components/Register/LogInPage";
import axios from "axios";
import OrderPurchasedPage from "./components/CatalogMenuPage/OrderPurchasedPage";
import { loginCredentials } from "./slicers/LoginSlicer";
import { useAppDispatch, useAppSelector } from "./components/ReduxHooks";

function App() {

  const [viewOrdersPageDetails, setViewOrdersPageDetails] = useState("");
  const [showAddressOption, setShowAddressOption] = useState(false);

  const [welcomeBackMessageTimeInterval, setWelcomeBackMessageTimeInterval] = useState(false);

  // const [signUpMessage,setSignUpMessage] = useState(false)

  const [test, setTest] = useState(false);

  const [totalPrice, setTotalPrice] = useState("");
  const [showCartPaymentPage, setShowCartPaymentPage] = useState(false);
  const [userName, setUserName] = useState("");

  const [orderLoggedInEmailID, setorderloggedInEmailID] = useState("");

  const [showUserSignedUp, setShowUserSignedUp] = useState(false);


  const [savedAddresDialogBox, setSavedAddresDialogBox] = useState(false);

  axios.defaults.withCredentials = true;

  const dispatch = useAppDispatch();

  const showUserLoggedIn = useAppSelector((state) => state.login.showUserLoggedIn)

  const cartItems = useAppSelector((state) => state.CartFunctionalitySlicer.cartItems);

  type ShowCartPaymentPageProps = {
    setShowAddressOption: String
    price: Number
  }
  useEffect(() => {
    console.log(showUserLoggedIn)
  })
  useEffect(() => {
    setTimeout(() => {
      // setSignUpMessage(false)
      setTest(false)
      setWelcomeBackMessageTimeInterval(false)
    }, 3000)

  })

  useEffect(() => {
    axios.get(`http://localhost:3001/Registration/login`).then((response) => {
      if (response.data.loggedIn === true) {
        dispatch(loginCredentials(true));

      } else {
        dispatch(loginCredentials(false));
      }
    });
  });



  useEffect(() => {
    const totalPrice = cartItems.reduce((total: any, cartItem: any) => {
      return cartItem.amount * cartItem.price + total;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  return (
    <div className="App">
      <Navbar

        setViewOrdersPageDetails={setViewOrdersPageDetails}
        setShowCartPaymentPage={setShowCartPaymentPage}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              showUserSignedUp={showUserSignedUp}
            />
          }
        />

        <Route
          path="/signUpPage"
          element={
            <SignUpPage
              setShowUserSignedUp={setShowUserSignedUp}
            />
          }
        />



        {showCartPaymentPage && (
          <Route
            path="/paymentCartPage"
            element={
              <ShowCartPaymentPage
                setShowAddressOption={setShowAddressOption}
                price={totalPrice}
              />
            }
          />
        )}
        {showUserLoggedIn ? (
          <Route
            path="/orderNowPage"
            element={
              <CatalogMenuPage
                userName={userName}
              />
            }
          />
        ) : (
          <Route
            path="/orderNowPage"
            element={
              <LogInPage
                setUserName={setUserName}
              />
            }
          />
        )}


        <Route
          path="/orderNowPage"
          element={
            <CatalogMenuPage
              userName={userName}
            />
          }
        />

        <Route
          path="/orderPurchasedPage"
          element={
            <OrderPurchasedPage />
          }
        />
      </Routes>
      {/* viewOrdersPageDetails={viewOrdersPageDetails} orderLoggedInEmailID={orderLoggedInEmailID} */}
    </div>
  );
}

export default App;

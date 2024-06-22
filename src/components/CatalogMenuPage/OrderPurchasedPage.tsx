import { useEffect, useState } from "react";
import axios from "axios"
import OrderPurchasedPageDetails from "./OrderPurchasedPageDetails";
import { Link } from "react-router-dom";
import { useAppSelector } from "../ReduxHooks";


// type  viewOrdersPageDetailsProps = {
//     viewOrdersPageDetails: String
//     orderLoggedInEmailID:String
// }

function OrderPurchasedPage() {

    const savedLoggedInEmailId = useAppSelector((state) => state.loginEmailId.savedEmailID)

    const [orderDetails, setOrderDetails] = useState([])
    const [showOrder, setShowOrder] = useState(false)


    useEffect(() => {
        console.log(savedLoggedInEmailId)
        const emailID = savedLoggedInEmailId || localStorage.getItem("loggedInEmailID");

        axios.post(`http://localhost:3001/FetchOrders/fetchOrderPurchasedData`, { emailID: emailID }).then((res) => {

            if (res.data.data) {
                console.log(res.data.data)
                setShowOrder(true);
                setOrderDetails(res.data.data)
            } else {
                setShowOrder(false);
                //    setOrderDetails("There are no orders. If you have not created the account Please Sign In First, Go back to Home Page")
            }

        })
    }, [savedLoggedInEmailId])

    return (
        <div>
            <h4 className="my-orders-heading">My Orders</h4>

            {
                showOrder ?
                    orderDetails.map((val) => {
                        console.log(val)
                        return <OrderPurchasedPageDetails val={val} />
                    })
                    : <p>{orderDetails}<Link to="/" /></p>

            }
        </div>
    )

}

export default OrderPurchasedPage
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../CatalogMenuPage/OrderPurchasedPageDetails.css";

type OrderPurchasedPageDetailsProps = {
  val:{
  name:string
  Phone_No:number
  address:string
  secondAddress:string
  orderID:string
  amount:number
  itemName:string
  itemQuantity:string
  orderDate:string
}
}
function OrderPurchasedPageDetails({ val }:OrderPurchasedPageDetailsProps) {

  let {
    name,
    Phone_No,
    address,
    secondAddress,
    orderID,
    amount,
    itemName,
    itemQuantity,
    orderDate,
  } = val;


  return (
    <div className="order-purchased-page-details-page">
      <table className="order-details-table">
        <thead>
          <tr>
            <th>OrderID</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>First Address</th>
            <th>Second Address</th>
            <th>Price</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{orderID}</td>
            <td>{name}</td>
            <td>{Phone_No}</td>
            <td>{address}</td>
            <td>{secondAddress}</td>
            <td>₹{amount / 100}</td>
            <td>{itemName}</td>
            <td>{itemQuantity}</td>
            <td>{orderDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderPurchasedPageDetails;

import { OrderType } from "@/app/Types/types";
import React from "react";
import OrderCard from "./OrderCard";

type ListingPropsType = {
  orders: OrderType[];
  statusHandler: () => void
};

const Listing = ({ orders, statusHandler }: ListingPropsType) => {
  return (
    <ul className="m-auto w-11/12 pt-4 lg:pt-8 min-h-screen">
        {/* <li className="md:flex justify-between items-center hidden ">
            <span className="border-2 border-dark w-1/6 text-center p-2">Buyer Info</span>
            <span className="border-2 border-dark w-1/6 text-center p-2">Phone</span>
            <span className="border-2 border-dark w-1/6 text-center p-2">Product</span>
            <span className="border-2 border-dark w-1/6 text-center p-2">Quantity</span>
            <span className="border-2 border-dark w-1/6 text-center p-2">Total</span>
            <span className=" w-1/6 text-center p-2"></span>

        </li> */}
      {orders.reverse().map((order) => (
        <OrderCard key={order.id} order={order} statusHandler={statusHandler}/>
      ))}
    </ul>
  );
};

export default Listing;

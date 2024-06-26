"use client";

import Listing from "@/app/Components/Design/AdminPanel/Listing";
import { LoginContext } from "@/app/LoginContext/LoginContext";
import { OrderType } from "@/app/Types/types";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";


const OrdersPage = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [filterQuery, setFilterQuery] = useState<"" | true | false>("");
  const [status, setStatus] = useState(true);

  const { access } = useContext(LoginContext);

  const changeStatus = () => {
    setStatus(!status);
  };

  useEffect(() => {
    fetch(
      `https://smartlocksmkdata.glitch.me/orders${
        filterQuery !== "" ? `?isFinished=${filterQuery}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [filterQuery, status]);

  if (access) {
    return (
      <section className="flex flex-col">
        <div className=" bg-lightestdark">
          <ul className="flex justify-between m-auto w-11/12 lg:w-6/12">
            <li className="w-1/3 flex justify-center items-center border-dark border-l-2">
              <button
                className={`p-4 w-full hover:bg-lightDark hover:text-redesignWhite font-semibold uppercase ${
                  filterQuery === "" ? "bg-lightDark text-redesignWhite" : ""
                }`}
                onClick={() => {
                  setFilterQuery("");
                }}
              >
                View All
              </button>
            </li>
            <li className="border-x-2 border-dark w-1/3 flex justify-center items-center">
              <button
                className={`p-4 w-full hover:bg-lightDark hover:text-redesignWhite font-semibold uppercase ${
                  filterQuery === true ? "bg-lightDark text-redesignWhite" : ""
                }`}
                onClick={() => {
                  setFilterQuery(true);
                }}
              >
                View Finished
              </button>
            </li>
            <li className="w-1/3 flex justify-center items-center border-dark border-r-2">
              <button
                className={`p-4 w-full hover:bg-lightDark hover:text-redesignWhite font-semibold uppercase ${
                  filterQuery === false ? "bg-lightDark text-redesignWhite" : ""
                }`}
                onClick={() => {
                  setFilterQuery(false);
                }}
              >
                View Pending
              </button>
            </li>
          </ul>
        </div>

        <Listing orders={orders} statusHandler={changeStatus} />
      </section>
    );
  }

  return redirect("https://www.smartlocks.mk/en/admin-log");
};
export default OrdersPage;

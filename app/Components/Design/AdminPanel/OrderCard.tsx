"use client";
import { OrderType } from "@/app/Types/types";
import Image from "next/image";
import React, { useState } from "react";
import chevron from "../../../../public/chevron.png";
import { usePathname, useRouter } from "next/navigation";
import tel from "../../../../public/tel.png";

type OrderCardPropsType = {
  order: OrderType;
  statusHandler: () => void;
};

const OrderCard = ({ order, statusHandler }: OrderCardPropsType) => {
  const [isDescriptionVisible, setisDescriptionVisible] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const date = new Date(order.date)

  const changeStatus = async (order: OrderType) => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...order, isFinished: !order.isFinished }),
    };

    const response = await fetch(
      `https://smartlocksmkdata.glitch.me/orders/${order.id}`,
      requestOptions
    );
    const data = await response.json();

    router.refresh();
    statusHandler();
  };

  return (
    <li className="border-2 bg-lightestdark border-x-lightDark p-3 mb-2 rounded-md">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center ">
        <div className="flex justify-between lg:w-1/4 ">
          <div className="flex flex-col justify-start gap-x-2 font-semibold">
            <span>{order.name}</span>
            <span>{order.lastName}</span>
          </div>

          <span className="flex justify-start items-center gap-x-2">
            <Image src={tel} alt="Tel" width={20} height={20} />
            <a href={`tel:${order.tel}`} className="underline">
              {order.tel}
            </a>
          </span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-4 lg:mt-0 gap-x-4 lg:w-2/4">
          <span className="lg:border-l-2 border-dark lg:px-2 font-semibold lg:w-1/4">
            Product: {order.product}
          </span>
          <span className="lg:border-x-2 border-dark lg:px-2 font-semibold lg:w-1/4">
            Quantity: {order.quantity}
          </span>
          <span className="lg:border-r-2 border-dark lg:pr-2 font-semibold lg:w-1/4">
            Total: {order.total.toLocaleString("en-EN")} mkd
          </span>
          <div className="flex justify-start items-center px-2">
            <span className="font-semibold">Status:</span>
            <Image
              className="inline"
              src={
                order.isFinished
                  ? "https://i.imgur.com/0enckr2.png"
                  : "https://i.imgur.com/zgzNz7d.png"
              }
              alt="Done"
              width={20}
              height={20}
            />

            <button
              className="ml-6 border-2 bg-redesignWhite hover:bg-lightDark hover:text-redesignWhite font-semibold border-dark text-dark p-2 rounded-md"
              onClick={() => {
                console.log("triger");

                changeStatus(order);
              }}
            >
              Change
            </button>
          </div>
        </div>
        <button
          className="p-2 "
          onClick={() => setisDescriptionVisible(!isDescriptionVisible)}
        >
          <Image
            src={chevron}
            alt="Chevron"
            width={20}
            height={20}
            className={`${isDescriptionVisible ? "" : "rotate-180"}`}
          />
        </button>
      </div>

      {isDescriptionVisible && (
        <div className="flex flex-col md:flex-row gap-x-4 border-t-2 border-dark w-11/12 pt-2">
          <p className="px-2 font-semibold">Email: {order.email}</p>
          <p className="md:border-l-2 mb-4 md:mb-0 border-dark px-2 font-semibold">
            Adress: {order.adress}
          </p>
          <p className="md:border-l-2 mb-4 md:mb-0 border-dark px-2 font-semibold">
            City: {order.city}
          </p>
          {order.date && (
            <p className="md:border-l-2 mb-4 md:mb-0 border-dark px-2 font-semibold">
              Date (dd/mm/yy): {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
            </p>
          )}
        </div>
      )}
    </li>
  );
};

export default OrderCard;

"use client";
import { LockType } from "@/app/Types/types";
import React, { useRef, useState } from "react";
import {
  fontK2dMedium,
  fontK2dRegular,
  fontKantumruy_ProMedium,
} from "../Fonts";
import PhoneInput from "react-phone-input-2";
import { usePathname, useRouter } from "next/navigation";
import { useForm } from "@formspree/react";

type CheckoutFormPropsType = {
  lock: LockType;
};

class Order {
  name: string;
  lastName: string;
  tel: string;
  quantity: number;
  product: string;
  adress: string;
  city: string;
  email: string;
  total: number;
  isFinished: false;
  date: Date;
  constructor(
    name: string,
    lastName: string,
    tel: string,
    email: string,
    adress: string,
    city: string,
    product: string,
    quantity: number,
    total: number
  ) {
    this.name = name;
    this.lastName = lastName;
    this.tel = tel;
    this.email = email;
    this.adress = adress;
    this.city = city;
    this.product = product;
    this.quantity = quantity;
    this.total = total;
    this.isFinished = false;
    this.date = new Date();
  }
}

const CheckoutForm = ({ lock }: CheckoutFormPropsType) => {
  const [quantity, setQuantity] = useState(1);
  const [phoneNum, setPhoneNum] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  const isPathEn = pathname.includes("/en");
  const [state, handleSubmit] = useForm("xjvnrjzk");
  // const [state, handleSubmit] = useForm("mrgwnngw");

  const nameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const adressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const order = new Order(
      nameRef.current!.value,
      lastNameRef.current!.value,
      phoneNum,
      emailRef.current!.value,
      adressRef.current!.value,
      cityRef.current!.value,
      lock.title,
      quantity,
      totalPrice
    );

    fetch("https://smartlocksmkdata.glitch.me/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(response.json());
      })
      .then((data) => {
        router.push("/confirm");
      })
      .catch((error) => {
        router.push("/err");
      });
  };

  return (
    <form
      className={`${fontK2dRegular.className} mb-8 lg:mb-0`}
      onSubmit={(e) => {
        onSubmit(e);
        handleSubmit(e);

        e.currentTarget.reset();
        setPhoneNum("");
      }}
    >
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          name="Name"
          ref={nameRef}
          required
          placeholder="Name*"
          className={`p-2 md:p-4 rounded-full border-2 border-darkText outline-darkText`}
        />
        <input
          type="text"
          name="Last Name"
          ref={lastNameRef}
          required
          placeholder="Last Name*"
          className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <PhoneInput
          country={"mk"}
          value={phoneNum}
          preferredCountries={["mk", "al", "bg", "rs", "ba", "xk"]}
          inputProps={{
            name: "Tel",
            required: true,
          }}
          containerClass="phoneContainer"
          inputClass="inputPhoneContainer"
          containerStyle={{
            flexBasis: "100%",
            borderRadius: "18rem",
          }}
          inputStyle={{
            width: "100%",
            borderRadius: "18rem",
            border: "2px solid #3A3C41",
          }}
          onBlur={(e: any) => {
            setPhoneNum(e.target.value);
          }}
        />
        <div className="flex justify-end gap-2 items-center my-4">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="Quantity"
            required
            id="quantity"
            min={1}
            value={quantity}
            className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText w-4/12`}
            onChange={(e) => {
              setTotalPrice(lock.price * e.currentTarget.valueAsNumber);
              setQuantity(e.currentTarget.valueAsNumber);
            }}
          />
          <input
            type="text"
            className="hidden"
            name="Product"
            value={lock.title}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="email"
          name="Email"
          required
          ref={emailRef}
          placeholder="Email*"
          className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
        />
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <input
            type="text"
            name="Adress"
            required
            ref={adressRef}
            placeholder="Adress*"
            className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
          />
          <input
            type="text"
            name="City"
            required
            ref={cityRef}
            placeholder="City*"
            className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
          />
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 my-4 gap-4">
        <button
          className={` bg-lightDark text-redesignWhite hover:bg-footerDark w-full py-4 rounded-full text-3xl uppercase tracking-tighter shadow-xl transition-colors ease-in-out   ${fontKantumruy_ProMedium.className}`}
        >
          Buy
        </button>

        <div className="text-lg">
          <p>
            Product: <span className="text-4xl">{lock.title}</span>
          </p>
          <p>
            Total:{" "}
            <span className="text-4xl">
              {(lock.price * quantity).toLocaleString("en-EN")}{" "}
            </span>{" "}
            mkd
          </p>
        </div>
      </div>
      <div>
        <p>
          *
          {isPathEn
            ? "Payment is made upon delivery."
            : "Плаќањето се врши при испораката."}
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;

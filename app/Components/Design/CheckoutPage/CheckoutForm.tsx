"use client";
import { LockType } from "@/app/Types/types";
import { useForm } from "@formspree/react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import {
  fontK2dRegular,
  fontKantumruy_ProMedium
} from "../Fonts";

type CheckoutFormPropsType = {
  lock: LockType;
  lang: any
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

const CheckoutForm = ({ lock, lang }: CheckoutFormPropsType) => {
  const [quantity, setQuantity] = useState(1);
  const [phoneNum, setPhoneNum] = useState("");
  const [totalPrice, setTotalPrice] = useState(lock.price * quantity);
  const router = useRouter();
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
          placeholder={lang?.checkout?.name ?? "Name"}
          className={`p-2 md:p-4 rounded-full border-2 border-darkText outline-darkText`}
        />
        <input
          type="text"
          name="Last Name"
          ref={lastNameRef}
          required
          placeholder={lang?.checkout?.lastName ?? "Last Name"}
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
          <label htmlFor="quantity">
              {lang?.checkout?.quantity ?? "Quantity"}:
          </label>
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

              if (
                isNaN(e.currentTarget.valueAsNumber) ||
                e.currentTarget.valueAsNumber === 1
              ) {
                setQuantity(e.currentTarget.valueAsNumber);
              } else {
                setQuantity(e.currentTarget.valueAsNumber);
              }
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
          placeholder={lang?.checkout?.email ?? "Email"}
          className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
        />
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <input
            type="text"
            name="Adress"
            required
            ref={adressRef}
            placeholder={lang?.checkout?.adress ?? "Adress"}
            className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
          />
          <input
            type="text"
            name="City"
            required
            ref={cityRef}
            placeholder={lang?.checkout?.city ?? "City"}
            className={`p-2 md:p-4  rounded-full border-2 border-darkText outline-darkText`}
          />
        </div>
      </div>

      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 my-4 gap-4">
        <button
          className={` bg-lightDark text-redesignWhite hover:bg-footerDark w-full py-4 rounded-full text-3xl uppercase tracking-tighter shadow-xl transition-colors ease-in-out   ${fontKantumruy_ProMedium.className}`}
        >
          {lang?.checkout?.btn ?? "Buy Now"}
        </button>

        <div className="text-lg">
          <p>
          {lang?.checkout?.product ?? "Product"}:
            <span className="text-4xl">{lock.title}</span>
          </p>
          <p>
          {lang?.checkout?.total ?? "Total"}:
            <span className="text-4xl">
              {isNaN((lock.price * quantity)) ? lock.price.toLocaleString('en-EN') : (lock.price * quantity).toLocaleString("en-EN")}
              
            </span>{" "}
            mkd
          </p>
        </div>
      </div>
      <div>
        <p>
          
          {lang?.checkout?.msg1 ?? "*All Fields Are Mandatory."}
        </p>
        <p>
        {lang?.checkout?.msg2 ?? "*Payout is made upon delivery."}
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;

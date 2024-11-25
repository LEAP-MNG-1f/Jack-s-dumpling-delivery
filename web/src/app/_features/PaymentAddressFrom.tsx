"use client";

import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { GreenButton } from "../ui";
export default function PaymentAddressForm() {
  const [district, setDistrict] = useState("");
  const [khoroo, setKhoroo] = useState("");
  const [appartment, setAppartment] = useState("");
  const [payment, setPayment] = useState("");
  const [information, setInformation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="w-full flex gap-4 flex-col justify-start">
      <select
        className="text-xl px-4 py-2 rounded-lg"
        value={district}
        onChange={(e) => setDistrict(e.target.value)}
      >
        <option value={"khan"}>Khan Uul</option>
        <option value={"SKhD"}>Songino Khairkhan</option>
        <option value={"bayangol"}>Bayangol</option>
      </select>

      {/* Khoroo Selection */}

      <select
        className="text-xl px-4 py-2 rounded-lg"
        value={khoroo}
        onChange={(e) => setKhoroo(e.target.value)}
      >
        {new Array(7).fill(null).map((_, index) => (
          <option key={index} value={index + 1}>
            {index + 1} - khoroo
          </option>
        ))}
      </select>

      {/* Appartment Selection */}

      <select
        className="text-xl px-4 py-2 rounded-lg"
        value={appartment}
        onChange={(e) => setAppartment(e.target.value)}
      >
        {[1, 2, 3, 4].map((num) => (
          <option key={num} value={`${num}bair`}>
            {num}-r bair
          </option>
        ))}
      </select>

      {/* Additional Information */}

      <TextField
        type="text-area"
        className=" text border"
        placeholder="please enter information"
        name="information"
        value={information}
        onChange={(e) => setInformation(e.target.value)}
      />

      {/* Phone Number */}
      <TextField
        className="border p-2"
        placeholder="Please enter a Phone number"
        name="number"
        type="number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      {/* Payment Method */}

      <Typography variant="subtitle1" gutterBottom>
        Payment Method
      </Typography>
      <div className="flex justify-around ">
        <div className="flex gap-2">
          Cash
          <input value="cash" type="radio" name="payment" />
        </div>
        <div className="flex gap-2">
          Credit Cart
          <input value="credit_card" type="radio" name="payment" />
        </div>
        <div className="flex gap-2">
          QPay
          <input value="qpay" type="radio" name="payment" />
        </div>
      </div>

      {/* Submit Button */}
      <button>
        <GreenButton buttonName="Submit" />
      </button>
    </div>
  );
}

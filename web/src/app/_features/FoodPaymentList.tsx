"use client";
import { cartItems } from "@/constants/mockdatas";
import PaymentCard from "../ui/PaymentCard";
import { GreenButton } from "../ui";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function FoodPaymentList() {
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <main className="flex flex-col justify-around text-center items-center h-full overflow-y-visible">
      <div>
        {cartItems.map((food, index) => {
          return (
            <PaymentCard
              key={index}
              imgUrl={food.imgUrl}
              foodName={food.foodName}
              price={food.price}
              ingredients={food.ingredients}
            />
          );
        })}
      </div>

      <div className="h-4 w-full flex justify-between items-center p-6">
        <div className="w-1/2">
          <Typography variant="h6">Total Amount</Typography>
          {totalAmount} ₮
        </div>
        <div className="w-1/2">
          <button>
            <GreenButton buttonName="Order Now" />
          </button>
        </div>
      </div>
    </main>
  );
}

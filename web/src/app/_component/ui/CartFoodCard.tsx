import { foodCardType } from "@/constants/types";
import { Minus, Plus } from "@/lib/math";
import CloseIcon from "@mui/icons-material/Close";

import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import { GreenButton } from "./GreenButton";


export default function CartFoodCard({
  imgUrl,
  foodName,
  price,
}: foodCardType) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="h-[182px] flex rounded border p-4 shadow-lg gap-4">
      <CardMedia
        component={"img"}
        className="!rounded-2xl"
        sx={{ width: 245, height: 150 }}
        image={imgUrl}
        alt="food"
      />
      <div className="w-[245px] h-[150px] flex flex-col justify-between">
        <div className="flex justify-between ">
          <Typography component="h6" variant="h5">
            {foodName}
          </Typography>
          <button>
            <CloseIcon />
          </button>
        </div>
        <Typography variant="subtitle1" component="div" sx={{ color: "green" }}>
          {price}₮
        </Typography>
        <Typography variant="subtitle1" component="div" sx={{ color: "grey" }}>
          ingredents
        </Typography>
        <div className="flex gap-4 items-center">
          <button onClick={() => setQuantity(Minus(quantity))}>
            <GreenButton buttonName="-" />
          </button>

          <div>{quantity}</div>
          <button onClick={() => setQuantity(Plus(quantity))}>
            <GreenButton buttonName="+" />
          </button>
        </div>
      </div>
    </div>
  );
}

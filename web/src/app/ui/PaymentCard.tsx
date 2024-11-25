import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { foodCardType } from "@/constants/types";

export default function PaymentCard({
  imgUrl,
  foodName,
  price,
  ingredients,
}: foodCardType) {
  return (
    <div className="w-[432px] flex items-center justify-center hover:cursor-pointer border-b-2 hover:shadow-xl px-4 ">
      <img src={`${imgUrl}`} className="h-[121px] w-[184px] rounded-xl" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {foodName}
        </Typography>
        <Typography variant="body2" sx={{ color: "green" }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ color: "grey" }}>
          {ingredients?.toString()}
        </Typography>
      </CardContent>
    </div>
  );
}

import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { foodCardType } from "@/constants/types";

export default function FoodCard(props: foodCardType) {
  return (
    <div className="!h-[256px] w-[282px] !rounded-2xl !shadow-md">
      <CardMedia
        component="img"
        className="!rounded-t-2xl !h-[189px] !w-[282px]"
        src={props.imgUrl}
        alt="photo"
      />
      <div className="px-2">
        <Typography>{props.discount}</Typography>

        <Typography gutterBottom variant="h6">
          {props.foodName}
        </Typography>
        <Typography variant="body1" className="text-[#18BA51]">
          {props.price}
        </Typography>
      </div>
    </div>
  );
}

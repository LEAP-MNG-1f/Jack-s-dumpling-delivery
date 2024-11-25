"use client";
import { foodCardType } from "@/constants/types";
import { Button, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { GreenButton } from "./GreenButton";

export default function FoodMainCard(props: foodCardType) {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <div className="!h-[256px] w-[282px] !rounded-2xl">
          <CardMedia
            component="img"
            className="!rounded-2xl !h-[189px] !w-[282px]"
            src={props.imgUrl}
            alt="photo"
          />
          <Typography>{props.discount}</Typography>
          <div className="flex flex-col h--50">
            <Typography gutterBottom variant="h6">
              {props.foodName}
            </Typography>
            <Typography variant="h6" className="text-[#18BA51]">
              {props.price}
            </Typography>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute h-1/2 w-1/3 top-[25%] left-[30%] bg-white rounded-2xl shadow-xl p-4 flex gap-2">
          <CardMedia
            component="img"
            className="!rounded-2xl !h-full !w-full cover"
            src={props.imgUrl}
            alt="photo"
          />
          <div className="flex flex-col gap-2 h-full w-1/2 justify-between">
            <div className="">
              <Typography variant="h5" sx={{ mt: 2 }}>
                {props.foodName}
              </Typography>
              <Typography variant="h6" sx={{ color: "green" }}>
                {props.price}
              </Typography>
            </div>
            <Typography variant="body1">ingredients:</Typography>
            <Typography
              variant="body2"
              sx={{ color: "grey", wrap: "flex-wrap", width: "200px" }}
            >
              {props.ingredients?.slice(1, 4).toString()}
            </Typography>
            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => setAmount(amount - 1)}>
                <GreenButton buttonName="-" />
              </button>
              <Typography>{amount}</Typography>
              <button onClick={() => setAmount(amount + 1)}>
                <GreenButton buttonName="+" />
              </button>
            </div>

            <button>
              <GreenButton buttonName="Insert cart" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

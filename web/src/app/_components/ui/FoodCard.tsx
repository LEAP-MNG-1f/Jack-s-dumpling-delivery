"use client";
import { CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { GreenButton } from "./GreenButton";
import { useCart } from "../context/CartContext";

type foodCardProps = {
  id: number;
  imgUrl: string;
  foodName: string;
  price: number;
  categoryName?: string;
  ingredients?: string[];
  discount?: number;
};

export default function FoodCard({
  id,
  foodName,
  price,
  imgUrl,
}: foodCardProps) {
  const {
    getFoodQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    addCart,
  } = useCart();

  const quantity = getFoodQuantity(id);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <div className="!h-[256px] w-[282px] !rounded-2xl">
          <CardMedia
            component="img"
            className="!rounded-2xl !h-[189px] !w-[282px]"
            src={imgUrl}
            alt="photo"
          />
          {/* <Typography>{discount}</Typography> */}
          <div className="flex flex-col h--50">
            <Typography gutterBottom variant="h6">
              {foodName}
            </Typography>
            <Typography variant="h6" className="text-[#18BA51]">
              {price}
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
        <div className="absolute h-1/2  top-[25%] left-[30%] bg-white rounded-2xl shadow-xl p-4 flex gap-2">
          <CardMedia
            component="img"
            className="!rounded-2xl !h-full !w- cover"
            src={imgUrl}
            alt="photo"
          />
          <div className="flex flex-col gap-2 h-full w-1/2 justify-between">
            <div className="">
              <Typography variant="h5" sx={{ mt: 2 }}>
                {foodName}
              </Typography>
              <Typography variant="h6" sx={{ color: "green" }}>
                {price}
              </Typography>
            </div>
            <Typography variant="body1">ingredients:</Typography>
            <Typography
              variant="body2"
              sx={{ color: "grey", wrap: "flex-wrap", width: "200px" }}
            >
              {/* {ingredients?.slice(1, 4).toString()} */}
            </Typography>
            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => decreaseCartQuantity(id)}>
                <GreenButton buttonName="-" />
              </button>
              <Typography>{quantity}</Typography>
              <button onClick={() => increaseCartQuantity(id)}>
                <GreenButton buttonName="+" />
              </button>
            </div>
            <button onClick={() => addCart(id, quantity)}>
              <GreenButton buttonName="Insert cart" />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

"use client"
import { foodCardType } from "@/constants/types";
import { Box, Button, CardMedia, Modal, Typography } from "@mui/material";
import { useState } from "react";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FoodMainCard(props: foodCardType) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
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
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Food name :{props.foodName}
          </Typography>
          <Typography>{props.price}</Typography>
          <Typography>ingredients: {props.ingredients}</Typography>
          <Typography>too shirheg</Typography>
          <Button>sagslah</Button>
        </Box>
      </Modal>
    </div>
  );
}
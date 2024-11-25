import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { foodCardType } from "@/constants/types";
import { Box, Button, Modal } from "@mui/material";
import { RoundedCorner, StarBorderSharp } from "@mui/icons-material";

export default function FoodCard(props: foodCardType) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="!h-[256px] w-[282px] !rounded-2xl !shadow-md">
          <CardMedia
            component="img"
            className="!rounded-t-2xl !h-[189px] !w-[282px]"
            src={props.imgUrl}
            alt="photo"
          />
          <div className="px-4 flex flex-col items-start">
            <Typography>{props.discount}</Typography>

            <Typography gutterBottom variant="h6">
              {props.foodName}
            </Typography>
            <Typography variant="h6" className="text-[#18BA51]">
              {props.price}
            </Typography>
          </div>
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            className="!rounded-t-2xl !h-[189px] !w-[282px]"
            src={props.imgUrl}
            alt="photo"
          />
        </Box>
      </Modal>
    </div>
  );
}

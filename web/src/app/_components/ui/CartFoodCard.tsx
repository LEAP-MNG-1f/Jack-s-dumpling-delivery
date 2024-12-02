import CloseIcon from "@mui/icons-material/Close";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { GreenButton } from "./GreenButton";
import { useCart } from "../context/CartContext";
import { foodArray } from "@/constants/mockdatas";

type foodCardType = {
  id: number;
  quantity: number;
  imgUrl: string;
  foodName: string;
  price: string;
};

export default function CartFoodCard({
  id,
  imgUrl,
  quantity,
  foodName,
  price,
}: foodCardType) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useCart();
  const food = foodArray.find((i) => i.id === id);
  if (food == null) return null;

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
          <button onClick={() => decreaseCartQuantity(id)}>
            <GreenButton buttonName="-" />
          </button>
          <div>{quantity}</div>
          <button onClick={() => increaseCartQuantity(id)}>
            <GreenButton buttonName="+" />
          </button>
          <button onClick={() => removeFromCart(id)}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

import { cartItems } from "@/constants/mockdatas";
import { ShoppingCart } from "@mui/icons-material";
import { Button, Drawer, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { GreenButton } from "../ui/GreenButton";
import CartFoodCard from "../ui/CartFoodCard";

type Anchor = "right";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  

  return (
    <>
      <Fragment>
        <Button onClick={toggleDrawer("right", true)} className="!text-black">
          <ShoppingCart sx={{ color: "black" }} />
          My Cart
        </Button>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          <div className="h-screen flex flex-col justify-between">
            {/* Header */}
            <div className="pb-5 w-full flex items-center flex-col justify-center gap-5">
              <div className="flex flex-col gap-3">
                <Typography variant="h5" className=" p-5 border-b-2">
                  Your Cart
                </Typography>

                {/* Cart Items */}
                <div className="flex flex-col gap-3 px-4 overflow-y-auto">
                  {cartItems.map((item, index) => (
                    <CartFoodCard
                      key={index}
                      imgUrl={item.imgUrl}
                      foodName={item.foodName}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="shadow flex justify-around items-center  p-4 border-t">
              <div>
                <Typography variant="h6">Total Amount</Typography>
                <Typography variant="h6" color="green">
                
                </Typography>
              </div>
              <button>
                <GreenButton
                 buttonName="Order Food" />
              </button>
            </div>
          </div>
        </Drawer>
      </Fragment>
    </>
  );
}

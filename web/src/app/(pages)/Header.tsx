"use client"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useState } from "react";
import Cart from "../_features/Cart";
export default function Header() {
  const [cartOpen, setcartOpen] = useState(false)
  const visibleCart = ()=>{
    setcartOpen(!cartOpen)
    console.log("aa");
    
  } 
  return (
    <div className="w-screen h-14 flex justify-center items-center mb-10">
      <div className="w-full flex justify-between items-center max-w-screen-xl">
        <div className="flex gap-2">
          <>LOGO</>
          <Link className="text-base font-bold" href={"/"}>
            Home
          </Link>
          <Link className="text-base font-bold" href={"/menu"}>
            Menu
          </Link>
          <Link className="text-base font-bold" href={"/deliveryarea"}>
            Delivery Area
          </Link>
        </div>
        <div className="flex gap-2">
          {/* //////////// */}
            <Cart/>
          {/* //////////// */}
          <Link className="text-base font-bold" href={"/login"}>
            <PersonIcon />
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./Cart";
import { HeaderButton } from "../ui/HeaderButton";
import { useCart } from "../context/CartContext";

export default function Header() {
  const pathname = usePathname() ?? undefined;
  const { cardQuantity } = useCart();
  return (
    <header className="w-screen h-10 flex justify-center items-center mb-2 fixed bg-white z-20">
      <div className="w-full flex justify-between items-center max-w-screen-xl">
        <div className="flex gap-2">
          <div className="font-bold text-lg flex items-center justify-center">
            LOGO
          </div>
          <Link href="/">
            <HeaderButton buttonName="Home" pathname={pathname} path="/" />
          </Link>
          <Link href="/menu">
            <HeaderButton buttonName="Menu" pathname={pathname} path="/menu" />
          </Link>
          <Link href="/deliveryarea">
            <HeaderButton
              buttonName="Delivery Area"
              pathname={pathname}
              path="/deliveryarea"
            />
          </Link>
        </div>
        <div className="flex gap-2">
          <Cart />
          {cardQuantity}
          <Link
            className="text-base font-bold flex items-center"
            href={"/login"}
            aria-label="Login"
          >
            <PersonIcon />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

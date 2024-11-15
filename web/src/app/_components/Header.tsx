import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
export default function Header() {
  return (
    <div className="container flex justify-between items-center max-w-screen-xl h-14">
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
        <button>
          <ShoppingCartIcon />
          <span className="text-base font-bold">My Cart</span>
        </button>
        <Link className="text-base font-bold" href={"/login"}>
          {" "}
          <PersonIcon />
          Login
        </Link>
      </div>
    </div>
  );
}
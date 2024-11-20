import Link from "next/link";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className="flex w-screen flex-col relative h-[400px] items-center justify-center bg-[#18BA51] mt-10">
      <div className="absolute w-full h-full overflow-hidden">
        <img src="../marks.png" />
      </div>
      <div className="flex flex-col gap-10 w-full items-center">
        <div className="flex justify-around text-white container">
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/menu"}>Menu</Link>
          <Link href={"/service"}>Service condition</Link>
          <Link href={"/area"}>Delivery area</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
        </div>
        <div className="text-white flex items-center justify-center gap-4  w-full text-4xl ">
          <Link href={"www.facebook.com"}>
            <Facebook sx={{ fontSize: 40 }} />
          </Link>
          <Link href={"www.Twitter.com"}>
            <Twitter sx={{ fontSize: 40 }} />
          </Link>
          <Link href={"www.Instagr.com"}>
            <Instagram sx={{ fontSize: 40 }} />
          </Link>
        </div>
        <div className="border-b border-white container"></div>
        <div className="text-white flex flex-col items-center justify-center">
          <Typography variant="h5">2024 Dumbling Service</Typography>
          <Typography sx={{ fontSize: 16 }}>
            Lisenced by Mongolian organic foods
          </Typography>
        </div>
      </div>
    </div>
  );
}

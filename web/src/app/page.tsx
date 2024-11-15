"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState, useEffect } from "react";
import Header from "./_components/Header";
import HomeCard from "./_components/HomeCard";
import FoodCard from "./_components/FoodCard";
import TracedIcon from "@/icons/TracedIcon";
import { Typography } from "@mui/material";

export default function Home() {
  const [data, setData] = useState();
  const fetchData = async () => {
    const response = await fetch(`${BACKEND_ENDPOINT}`);
    const datas = await response.json();
    setData(datas);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="flex justify-center items-center w-screen flex-col">
      <Header />
      <div className="h-[788px] flex justify-center items-center w-full bg-[#18BA51] relative">
        <div className="h-full w-full flex justify-center items-center">
          <TracedIcon />
        </div>

        <div className="absolute top-2/5 left-28 w-96">
          <Typography className="text-[#ffffff] border-b" variant="h3">
            Pinecone Food delivery
          </Typography>

          <Typography className="text-[#ffffff] font-semibold" variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </div>
      </div>
      <div className="container flex flex-col justify-between items-center max-w-screen-xl">
        <div className="grid grid-cols-4 w-full">
          <HomeCard
            icon="dsad"
            title="delivery state"
            detail="request prepare"
          />
          <HomeCard
            icon="dsacas"
            title="delivery state"
            detail="request prepare"
          />
          <HomeCard
            icon="casdca"
            title="delivery state"
            detail="request prepare"
          />
          <HomeCard
            icon="csadca"
            title="delivery state"
            detail="request prepare"
          />
        </div>
        <div>
          <FoodCard
            url="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="breakfast"
            price={8000}
          />
        </div>
      </div>
    </main>
  );
}

"use client";
import { BACKEND_ENDPOINT } from "@/constants/constant";
import { useState, useEffect } from "react";
import Header from "./_components/Header";
import HomeCard from "./_components/HomeCard";
import FoodCard from "./_components/FoodCard";
import TracedIcon from "@/icons/TracedIcon";
import { Typography } from "@mui/material";
import HomeHeroSection from "./_features/HomeHeroSection";

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
    <main className="flex justify-center items-center w-screen flex-col gap-20">
      <div className="flex w-screen justify-center flex-col">
        <Header />
        <div className="hidden md:flex">
          <HomeHeroSection />
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

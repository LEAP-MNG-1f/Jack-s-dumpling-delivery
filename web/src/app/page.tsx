"use client";
import { BACKEND_ENDPOINT } from "@/constants";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import {
  FoodListSection,
  HomeHeroSection,
  HomeMarketingSection,
} from "./_features";

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
    <main className="flex justify-between items-center w-screen flex-col gap-20">
      <div className="flex w-screen items-center justify-center flex-col ">
        <div className="hidden md:flex w-screen bg-green-600">
          <HomeHeroSection />
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center max-w-screen-xl gap-20">
        <HomeMarketingSection />
        <Typography variant="h3">Foods</Typography>

        <FoodListSection />
      </div>
    </main>
  );
}

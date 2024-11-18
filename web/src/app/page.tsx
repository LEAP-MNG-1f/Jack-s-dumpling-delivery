"use client";
import { BACKEND_ENDPOINT } from "@/constants";
import { useState, useEffect } from "react";
import Header from "./_components/Header";
import FoodCard from "./_components/FoodCard";
import TracedIcon from "@/icons/TracedIcon";
import { Typography } from "@mui/material";
import HomeHeroSection from "./_features/HomeHeroSection";
import { foodArray, marketingArray } from "@/constants/mockdatas";
import MarketingCard from "./_components/MarketingCard";

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

      <div className="container flex flex-col justify-center items-center max-w-screen-xl gap-20">
        <div className="grid grid-cols-4 gap-10">
          {marketingArray.map((detail) => {
            return (
              <div key={detail.id}>
                <MarketingCard
                  id={detail.id}
                  icon={detail.icon}
                  title={detail.title}
                  desc={detail.desc}
                />
              </div>
            );
          })}
        </div>
        <Typography variant="h3">Foods</Typography>
        <div className="flex flex-wrap justify-between gap-4">
          {foodArray.map((food) => {
            return (
              <div key={food.id}>
                <FoodCard
                  imgUrl={food.imgUrl}
                  foodName={food.foodName}
                  price={food.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

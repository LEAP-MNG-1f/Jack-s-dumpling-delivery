import { foodArray } from "@/constants/mockdatas";
import FoodCard from "../../ui/FoodCard";
import { HomeHeroSection } from "./HomeHeroSection";
import { HomeMarketingSection } from "./HomeMarketingSection";

export default function Homepage() {
  return (
    <>
      <HomeHeroSection />
      <HomeMarketingSection />
      {foodArray.map((food) => {
        return (
          <FoodCard
            key={food.id}
            id={food.id}
            imgUrl={food.imgUrl}
            foodName={food.foodName}
            price={food.price}
          />
        );
      })}
    </>
  );
}

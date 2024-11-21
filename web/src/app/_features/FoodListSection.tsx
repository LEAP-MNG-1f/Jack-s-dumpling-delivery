import { foodArray } from "@/constants/mockdatas";

import FoodMainCard from "../ui/FoodMainCard";

export const FoodListSection = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between gap-4">
      {foodArray.map((food) => {
        return (
          <div key={food.id}>
          <FoodMainCard imgUrl={food.imgUrl} foodName={food.foodName} price={food.price}ingredients={food.ingredients}/>
          </div>
        );
      })}
    </div>
  );
};

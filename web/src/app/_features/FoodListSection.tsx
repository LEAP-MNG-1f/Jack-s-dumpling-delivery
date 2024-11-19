import { foodArray } from "@/constants/mockdatas";
import FoodCard from "../_components/FoodCard";

export const FoodListSection = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap justify-between gap-4">
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
  );
};

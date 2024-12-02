import { BACKEND_ENDPOINT } from "@/constants";
import { Typography } from "@mui/material";
import AddFoodCard from "./AddFoodCard";

export const AdminMain = () => {
  const addFood = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Origin-Allow": "*",
      },
      body: JSON.stringify({}),
    };
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/food`, options);
      const data = await response.json();
    } catch (error) {
      console.log("food fetch", error);
    }
  };

  return (
    <div className="border w-full">
      <div className="flex justify-around items-center">
        <Typography variant="h3">Breakfast</Typography>
        <AddFoodCard />
      </div>
    </div>
  );
};

import { categoriesArray } from "@/constants";
import { Button } from "@mui/material";

export const CategorySection = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <main className="w-full max-w-screen-xl flex justify-around">
        {categoriesArray.map((category) => {
          return (
            <div key={category.id}>
              <Button variant="contained">{category.categoryName}</Button>
            </div>
          );
        })}
      </main>
    </div>
  );
};

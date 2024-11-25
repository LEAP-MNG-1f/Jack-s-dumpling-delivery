"use client";

import { categoriesArray } from "@/constants";
import { CategoryButton } from "../ui/CategoryButton";
import { useState } from "react";
type categorySectionType = {
  selectedCategory: string;
  setSelectedCategory: (categoryName: string) => void;
};

export const CategorySection = ({
  selectedCategory,
  setSelectedCategory,
}: categorySectionType) => {
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <main className="w-full max-w-screen-xl flex flex-wrap justify-around gap-4">
        {categoriesArray.map((category) => (
          <div key={category.id}>
            <CategoryButton
              focus={selectedCategory}
              buttonName={category.categoryName}
              onClick={() => handleCategoryClick(category.categoryName)}
            >
              {category.categoryName}
            </CategoryButton>
          </div>
        ))}
      </main>
    </div>
  );
};

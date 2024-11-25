"use client";
import { CategorySection, FoodListSection } from "@/app/_features";
import { useState } from "react";

export default function Menupage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <main className="w-screen flex flex-col items-center justify-center gap-16 pt-20">
      <CategorySection
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <FoodListSection />
    </main>
  );
}

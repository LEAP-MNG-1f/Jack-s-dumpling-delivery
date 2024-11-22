import { CategorySection, FoodListSection } from "@/app/_features";

export default function Menupage() {
  return (
    <main className="w-screen flex flex-col items-center justify-center gap-16">
      <CategorySection />
      <FoodListSection />
    </main>
  );
}

type marketingItemProps = {
  id: number;
  icon: string;
  title: string;
  desc: string;
};

export const marketingArray: marketingItemProps[] = [
  {
    id: 1,
    icon: "HomeIcon",
    title: "Welcome Home",
    desc: "Explore our features and make yourself comfortable.",
  },
  {
    id: 2,
    icon: "settings",
    title: "Settings",
    desc: "Customize your preferences to get the best experience.",
  },
  {
    id: 3,
    icon: "help",
    title: "Help Center",
    desc: "Find answers to your questions or get in touch with support.",
  },
  {
    id: 4,
    icon: "notifications",
    title: "Notifications",
    desc: "Stay updated with the latest alerts and messages.",
  },
];

type foodCardType = {
  id: number;
  imgUrl: string;
  foodName: string;
  price: number;
  categoryName: string;
  ingredients: string[];
};
type IngredientType = string[];
export const foodArray: foodCardType[] = [
  {
    id: 16,
    imgUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Brownie",
    price: 4.49,
    categoryName: "Desserts",
    ingredients: [
      "Flour",
      "Sugar",
      "Cocoa Powder",
      "Butter",
      "Eggs",
      "Vanilla Extract",
      "Chocolate Chips",
    ],
  },
  {
    id: 17,
    imgUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Brownie",
    price: 4.49,
    categoryName: "Desserts",
    ingredients: [
      "Flour",
      "Sugar",
      "Cocoa Powder",
      "Butter",
      "Eggs",
      "Vanilla Extract",
      "Chocolate Chips",
    ],
  },
];

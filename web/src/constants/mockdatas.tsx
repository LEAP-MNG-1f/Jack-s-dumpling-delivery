import { foodCardType, marketingItemType } from "./types";

export const marketingArray: marketingItemType[] = [
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

export const foodArray: foodCardType[] = [
  // Category: Pizza
  {
    id: 1,
    imgUrl:
      "https://images.pexels.com/photos/4109083/pexels-photo-4109083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Margherita Pizza",
    price: 8.99,
    categoryName: "Pizza",
  },
  {
    id: 2,
    imgUrl:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Pepperoni Pizza",
    price: 10.99,
    categoryName: "Pizza",
  },
  {
    id: 3,
    imgUrl:
      "https://images.pexels.com/photos/7242163/pexels-photo-7242163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Veggie Pizza",
    price: 9.99,
    categoryName: "Pizza",
  },
  {
    id: 4,
    imgUrl:
      "https://images.pexels.com/photos/1233330/pexels-photo-1233330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "BBQ Chicken Pizza",
    price: 11.99,
    categoryName: "Pizza",
  },

  // Category: Burgers
  {
    id: 5,
    imgUrl:
      "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Cheeseburger",
    price: 6.99,
    categoryName: "Burgers",
  },
  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1731412468777-79db0b37cfda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    foodName: "Double Burger",
    price: 8.99,
    categoryName: "Burgers",
  },
  {
    id: 7,
    imgUrl:
      "https://images.pexels.com/photos/1474125/pexels-photo-1474125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Veggie Burger",
    price: 7.49,
    categoryName: "Burgers",
  },
  {
    id: 8,
    imgUrl:
      "https://images.pexels.com/photos/2095575/pexels-photo-2095575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Chicken Burger",
    price: 7.99,
    categoryName: "Burgers",
  },

  // Category: Drinks
  {
    id: 9,
    imgUrl:
      "https://images.pexels.com/photos/1845299/pexels-photo-1845299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Coca-Cola",
    price: 1.99,
    categoryName: "Drinks",
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1495221521568-8b714b2cb6fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    foodName: "Iced Tea",
    price: 2.49,
    categoryName: "Drinks",
  },
  {
    id: 11,
    imgUrl:
      "https://images.pexels.com/photos/327138/pexels-photo-327138.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Lemonade",
    price: 2.99,
    categoryName: "Drinks",
  },
  {
    id: 12,
    imgUrl:
      "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Coffee",
    price: 3.49,
    categoryName: "Drinks",
  },

  // Category: Desserts
  {
    id: 13,
    imgUrl:
      "https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Chocolate Cake",
    price: 4.99,
    categoryName: "Desserts",
  },
  {
    id: 14,
    imgUrl:
      "https://images.pexels.com/photos/1914296/pexels-photo-1914296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Vanilla Ice Cream",
    price: 3.99,
    categoryName: "Desserts",
  },
  {
    id: 15,
    imgUrl:
      "https://images.pexels.com/photos/4106487/pexels-photo-4106487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Cheesecake",
    price: 5.49,
    categoryName: "Desserts",
  },
  {
    id: 16,
    imgUrl:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    foodName: "Brownie",
    price: 4.49,
    categoryName: "Desserts",
  },
];

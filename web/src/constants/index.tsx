import { categoryArrayType } from "./types";

export const BACKEND_ENDPOINT = process.env.API_URL;

export const categoriesArray: categoryArrayType[] = [
  { id: 1, categoryName: "Breakfast" },
  { id: 2, categoryName: "Lunch" },
  { id: 3, categoryName: "Dinner" },
  { id: 4, categoryName: "Main Foods" },
  { id: 5, categoryName: "Deserts" },
  { id: 6, categoryName: "Beverages" },
  { id: 7, categoryName: "All" },
];

const modifiedArray = [
  {
    categoryName: "",
    foods: [],
  },
  { categoryName: "", foods: [] },
];

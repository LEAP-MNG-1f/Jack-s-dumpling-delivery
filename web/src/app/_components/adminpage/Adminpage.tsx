"use client";
import { BACKEND_ENDPOINT } from "@/constants";
import { AdminMain } from "./AdminMain";
import { AdminSidebar } from "./AdminSidebar";
import { useEffect, useState } from "react";
type TCategory = {
  _id: string;
  name: string;
};

export const Adminpage = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const fetchCategory = async () => {
    try {
      const result = await fetch(`${BACKEND_ENDPOINT}/api/categories`);
      const data = await result.json();
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="pt-10 w-screen flex justify-center">
      <div className="flex justify-between max-w-screen-xl container">
        <AdminSidebar categories={categories} setCategories={setCategories} />
        <AdminMain />
      </div>
    </div>
  );
};

"use client"
import Style from "./explorePage.module.css"
import React, { useEffect } from "react";
import TypesData from "@/components/typesData";
import RecoursesData from "@/assets/datasheet/data.json"
import HeaderComponent from "@/components/HeaderComponent";
import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import ListPins from "../template/listPins";
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import categories from "@/assets/datasheet/categories.json"
import getUser from "@/db/getUser";
import userType from "@/types/userType";

export default function Home() {
  const { categoriesSelected, editCategory } = useCategoriesSelected()
  const filteredData = filterPinsByCategory(RecoursesData.data, categoriesSelected);
  useEffect(() => {
    const { user }: { user: userType | null } = getUser()
    console.log(user)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <HeaderComponent />
      <section className={Style.headerPage}>
        <h1 className={Style.tittlePage}>Explore Recourses</h1>
      </section>
      <TypesData categories={categories.data} categoriesSelected={categoriesSelected} onClick={editCategory} />
      <ListPins Pins={filteredData} />
    </main>
  );
}
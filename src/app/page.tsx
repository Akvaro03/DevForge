"use client";
import Style from "./explorePage.module.css";
import React from "react";
import TypesData from "@/components/typesData";
import RecoursesData from "@/assets/datasheet/data.json";
import HeaderComponent from "@/components/HeaderComponent";
import useCategoriesSelected from "@/hooks/useCategoriesSelected";
import ListPins from "../template/listPins";
import filterPinsByCategory from "@/utils/filterPinsByCategory";
import categories from "@/assets/datasheet/categories.json";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import CustomBottom from "@/components/customBottom";
export default function Home() {
  const { categoriesSelected, editCategory, clearCategories } = useCategoriesSelected();
  const filteredData = filterPinsByCategory(
    RecoursesData.data,
    categoriesSelected
  );

  return (
    <main className="flex min-h-screen flex-col items-center py-8">
      <HeaderComponent />
      <section className={Style.headerPage}>
        <h1 className={Style.tittlePage}>Explore Recourses</h1>
        {categoriesSelected[0] && <CustomBottom isCircle onClick={clearCategories} icon={<SearchOffIcon />} />}
      </section>
      <TypesData
        categories={categories.data}
        categoriesSelected={categoriesSelected}
        onClick={editCategory}
      />
      <ListPins Pins={filteredData} />
    </main>
  );
}

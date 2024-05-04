"use client"
import { motion } from "framer-motion"
import Style from "./explorePage.module.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import React, { useCallback, useState } from "react";
import TypesData from "@/components/typesData";
import RecoursesData from "@/assets/db/data.json"
import CustomBottom from "@/components/Filter";
import CardRecourse from "@/components/cardRecourse";
import IsInView from "@/components/IsInView";
import recourseType from "@/types/recourseType";
import HeaderComponent from "@/components/HeaderComponent";

export default function Home() {
  const [countPins, setCountPins] = useState(20)
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])

  const loadMorePins = useCallback(() => {
    setCountPins(prevCount => prevCount + 20);
  }, []);


  const handleCategoriesSelected = useCallback((name: string) => {
    setCategoriesSelected(prev =>
      prev.includes(name) ?
        prev.filter(cat => cat !== name) :
        [...prev, name]);
  }, []);
  const filteredData = getFilteredData(RecoursesData.data, categoriesSelected);
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <HeaderComponent />
      <section className={Style.headerPage}>
        <h1 className={Style.tittlePage}>Explore</h1>
        <article className={Style.containerHeaders}>
          <CustomBottom tittle="Filter" icon={<FilterAltOutlinedIcon />} />
          <CustomBottom tittle="Sort" icon={<SortOutlinedIcon />} />
        </article>
      </section>
      <TypesData categoriesSelected={categoriesSelected} onClick={handleCategoriesSelected} />
      <motion.section layout className={Style.containerRecourses}>
        {filteredData.slice(0, countPins).map(data => (
            <CardRecourse {...data} key={data.name} />
          ))}
      </motion.section>
      <IsInView funcInView={loadMorePins} />
    </main>
  );
}

function getFilteredData(data: recourseType[], categoriesSelected: string[]) {
  if (categoriesSelected.length === 0) return data;
  return data.filter(item => item.categories.some(cat => categoriesSelected.includes(cat)));
}
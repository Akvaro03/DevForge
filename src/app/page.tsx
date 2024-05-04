"use client"
import { motion } from "framer-motion"
import Style from "./explorePage.module.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import React, { useRef, useState } from "react";
import TypesData from "@/components/typesData";
import RecoursesData from "@/assets/db/data.json"
import CustomBottom from "@/components/Filter";
import CardRecourse from "@/components/cardRecourse";
import IsInView from "@/components/IsInView";

export default function Home() {
  const [countPins, setCountPins] = useState(20)
  const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])
  const loadMorePins = () => {
    setCountPins(prevCount => prevCount + 20);
  };
  const handleCategoriesSelected = (name: string) => {
    if (categoriesSelected.includes(name)) {
      setCategoriesSelected(prev => prev.filter(namePrev => namePrev != name))
    } else {
      setCategoriesSelected(prev => [...prev, name])
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className={Style.headerPage}>
        <h1 className={Style.tittlePage}>Explore</h1>
        <article className={Style.containerHeaders}>
          <CustomBottom tittle="Filter" icon={<FilterAltOutlinedIcon />} />
          <CustomBottom tittle="Sort" icon={<SortOutlinedIcon />} />
        </article>
      </section>
      <TypesData categoriesSelected={categoriesSelected} onClick={handleCategoriesSelected} />
      <motion.section layout className={Style.containerRecourses}>
        {RecoursesData.data.slice(0, countPins).map((data, key) => (
          <CardRecourse {...data} key={key} />
        ))}
      </motion.section>
      <IsInView funcInView={loadMorePins} />
    </main>
  );
}
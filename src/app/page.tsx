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
import IsInView from "@/utils/isInView";

export default function Home() {
  const [countPins, setCountPins] = useState(20)
  const functInView = () => {
    setCountPins(prev => prev + 20)
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
      <TypesData />
      <motion.section layout className={Style.containerRecourses}>
        {RecoursesData.data.slice(0, countPins).map((data, key) => (
          <CardRecourse {...data} key={key} />
        ))}
      </motion.section>
      <IsInView funcInView={functInView} />
    </main>
  );
}
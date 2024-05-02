import CustomButtom from "@/components/Filter";
import Style from "./explorePage.module.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import React from "react";
import TypesData from "@/components/typesData";
import RecoursesData from "@/assets/db/data.json"
import recourseType from "@/types/recourseType";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <section className={Style.headerPage}>
        <h1 className={Style.tittlePage}>Explore</h1>
        <article className={Style.containerHeaders}>
          <CustomButtom tittle="Filter" icon={<FilterAltOutlinedIcon />} />
          <CustomButtom tittle="Sort" icon={<SortOutlinedIcon />} />
        </article>

      </section>
      <TypesData />
      <section className={Style.containerRecourses}>
        {RecoursesData.data.map((data, key) => (
          <CardRecourse data={data} key={key} />
        ))}
      </section>
    </main>
  );
}

function CardRecourse({ data }: { data: recourseType }) {
  return (
    <div style={data.name.length % 2 === 0 ? divShort : divLarge}>
    </div>
  );
}


const divShort = { height: "250px", width: "200px", background: "grey", borderRadius: "15px" }
const divLarge = { height: "300px", width: "200px", background: "grey", borderRadius: "15px" }
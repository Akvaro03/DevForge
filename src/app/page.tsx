import CustomButtom from "@/components/Filter";
import Style from "./explorePage.module.css"
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import React from "react";
import ItemType from "@/components/itemType";
import TypesData from "@/components/typesData";
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
      </section>
    </main>
  );
}

function CardRecourse() {
  return (
    <div>

    </div>
  );
}

const types = [
  {
    name: "IA"
  },
  {
    name: "Color"
  },
  {
    name: "Components"
  },
  {
    name: "Animations"
  },
  {
    name: "Pics"
  },
  {
    name: "Sounds"
  },
  {
    name: "Helpers"
  },
  {
    name: "Recourses"
  }
]

const recoursesData = [
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Pics"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Sounds"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Pics"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Recourses"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Pics"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Pics"
  },
  {
    img: "www-adasd",
    tittle: "tittle",
    description: "asdasd  asd a asd asd a asda d asd asd   sadasdasd as asd ad as",
    categoty: "Pics"
  }
]
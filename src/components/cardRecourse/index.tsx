"use client"
import recourseType from "@/types/recourseType";
import getRandomNumber from "@/utils/getRandomNumber";
import Style from "./cardRecourse.module.css"
import { motion } from "framer-motion"
import { useRef } from "react";

function CardRecourse({ name, description, url }: recourseType) {
    return (
        <motion.div whileHover={{ scale: .9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => window.open(url)}
            className={Style.CardRecourse} >
            <h2 className={Style.tittleCard}>{name}</h2>
            <h4 className={Style.subtitleCard}>{description}</h4>
        </motion.div >
    );
}

export default CardRecourse;

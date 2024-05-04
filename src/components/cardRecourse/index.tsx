"use client"

import recourseType from "@/types/recourseType";
import getRandomNumber from "@/utils/getRandomNumber";
import Style from "./cardRecourse.module.css"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react";

function CardRecourse({ name, description, url, categories }: recourseType) {
    const [height, setHeight] = useState(250);
    const categoriesString = categories.map((str, index) => (
        <React.Fragment key={index}>
            {str}
            {index !== categories.length - 1 && <span className={Style.joinCategories}> / </span>}
        </React.Fragment>
    ));


    useEffect(() => {
        const calculatedHeight = getRandomNumber(description.length * 1.5, 200);
        setHeight(calculatedHeight);
    }, [description]);
    return (
        <motion.div style={{ height }}
            whileHover={{ scale: .9, }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            onClick={() => window.open(url)}
            className={Style.CardRecourse} >
            <div className={Style.containerTittle}>
                <h2 className={Style.tittleCard}>{name}</h2>
                <h4 className={Style.subtitleCard}>{categoriesString}</h4>
            </div>
            <h4 className={Style.descriptionCard}>{description.length > 180 ? description.slice(0, 180) + "..." : description}</h4>
        </motion.div >
    );
}

export default CardRecourse;

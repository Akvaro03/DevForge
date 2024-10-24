"use client"

import getRandomNumber from "@/utils/getRandomNumber";
import React, { useEffect, useState } from "react";
import recourseType from "@/types/recourseType";
import Style from "./cardRecourse.module.css"
import { motion } from "framer-motion"
import BookMarkRecourse from "../bookMarkRecourse";
import useSaveRecourse from "@/db/saveRecourse";
import { useGlobalContext } from "@/app/context/store";

function CardRecourse({ name, description, url, categories }: recourseType) {
    const { resetPins } = useGlobalContext()

    const [isHover, setIsHover] = useState(false)
    const [height, setHeight] = useState(250);
    const saveRecourse = useSaveRecourse()

    const categoriesString = categories.map((str, index) => (
        <React.Fragment key={index}>
            {str}
            {index !== categories.length - 1 && <span className={Style.joinCategories}> / </span>}
        </React.Fragment>
    ));
    const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.tagName === 'path' || target.tagName === 'svg') {
            console.log("Se cambia")
            saveRecourse({ name, description, url, categories })
            resetPins()
        } else {
            window.open(url);
        }
    };

    useEffect(() => {
        const calculatedHeight = getRandomNumber(description.length * 1.5, 200);
        setHeight(calculatedHeight);
    }, [description]);

    return (
        <motion.div
            style={{ height }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            exit={{ opacity: 0 }}
            whileHover={{ scale: .92, }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            onClick={(e) => handleCardClick(e)}
            className={Style.CardRecourse} >
            <div className={Style.containerTittle}>
                <h2 className={Style.tittleCard}>{name}</h2>
                <div className={Style.subtitleContainer}>
                    <h4 className={Style.subtitleCard}>{categoriesString}</h4>
                    <BookMarkRecourse nameRecourse={name} isHover={isHover} />
                </div>
            </div>
            <h4 className={Style.descriptionCard}>{description.length > 240 ? description.slice(0, 240) + "..." : description}</h4>
        </motion.div >
    );
}

export default CardRecourse;

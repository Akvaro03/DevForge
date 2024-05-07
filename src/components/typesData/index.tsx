"use client"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Style from "./typeData.module.css"
import ItemType from "../itemType";
import { motion } from "framer-motion"
import { useState } from "react";
import { categoryType } from '@/types/categoryTypes';
function TypesData({ categories, categoriesSelected, onClick, }: { categories: categoryType[], categoriesSelected: string[], onClick: (name: string) => void }) {
    const [openTypes, SetOpenTypes] = useState(false)
    return (
        <>
            <motion.section
                animate={openTypes ? "open" : "closed"}
                variants={variants} className={Style.containerTypes}>
                {categories.map((type, key) => (
                    <ItemType isSelect={categoriesSelected.includes(type.name)} type={type.name} key={key} onClick={onClick} />
                ))}
            </motion.section >
            {categories.length > 22 && (
                <motion.article
                    onClick={() => SetOpenTypes((prev: boolean) => !prev)}
                    animate={openTypes ? "open" : "closed"}
                    variants={variantsArrow}
                    className={Style.arrowDropDown}
                    transition={{ duration: 0.2 }}
                    whileHover={openTypes ? hoverOpenArrow : hoverArrow}>
                    <ArrowDropDownIcon />
                </motion.article >
            )}
        </>
    );
}

const variants = {
    open: { height: "auto" },
    closed: { height: "12vh" },
}
const variantsArrow = {
    open: { rotateZ: 180 },
    closed: { rotateZ: 0 },
}
const hoverOpenArrow = { translateY: -20, scale: 1.5 }
const hoverArrow = { translateY: 20, scale: 1.5 }
export default TypesData;
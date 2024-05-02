"use client"

import categories from "@/assets/db/categories.json"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Style from "./typeData.module.css"
import ItemType from "../itemType";
import { motion } from "framer-motion"
import { useState } from "react";
function TypesData() {
    const [openTypes, SetOpenTypes] = useState(false)
    return (
        <>
            <motion.section
                animate={openTypes ? "open" : "closed"}
                variants={variants} className={Style.containerTypes}>
                {categories.data.map((type, key) => (
                    <ItemType type={type.name} key={key} />
                ))}
            </motion.section >
            <motion.article onClick={() => SetOpenTypes((prev: boolean) => !prev)} className={Style.arrowDropDown} whileHover={{ translateY: 20, scale: 1.1 }}>
                <ArrowDropDownIcon />
            </motion.article>
        </>
    );
}

const variants = {
    open: { height: "auto" },
    closed: { height: "15vh" },
}

export default TypesData;
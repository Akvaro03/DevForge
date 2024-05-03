'use client'

import { ReactElement } from "react";
import Style from "./Filter.module.css"
import { motion } from "framer-motion"

function CustomBottom({ tittle, icon }: { tittle: string, icon?: ReactElement }) {
    return (
        <motion.article whileHover={{ scale: 1.05 }} whileTap={{ scale: .9 }} className={Style.containerFilter}>
            {icon}
            {tittle}
        </motion.article>
    );
}

export default CustomBottom;
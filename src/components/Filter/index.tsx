'use client'

import { ReactElement } from "react";
import Style from "./Filter.module.css"
import { motion } from "framer-motion"

function CustomBottom({ tittle, icon, onClick }: { tittle: string, icon?: ReactElement, onClick?: () => void }) {
    return (
        <motion.article
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .9 }}
            onClick={onClick}
            className={Style.containerFilter}>
            {icon}
            {tittle}
        </motion.article>
    );
}

export default CustomBottom;
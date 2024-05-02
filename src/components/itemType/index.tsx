"use client"

import Style from "./itemType.module.css"
import { motion } from "framer-motion"

function ItemType({ type }: { type: string }) {
    return (
        <motion.div whileTap={{ scale: .9 }} className={Style.itemType}>
            <p>
                {type}
            </p>
        </motion.div>
    );
}

export default ItemType;
"use client"

import Style from "./itemType.module.css"
import { motion } from "framer-motion"

function ItemType({ type, isSelect, onClick }: { type: string, isSelect: boolean, onClick: (name: string) => void }) {
    return (
        <motion.div whileTap={{ scale: .9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={isSelect ? Style.itemTypeSelect : Style.itemType}
            onClick={() => onClick(type)}>
            <p>
                {type}
            </p>
        </motion.div>
    );
}

export default ItemType;
"use client";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Style from "./typeData.module.css";
import ItemType from "../itemType";
import { AnimatePresence, motion } from "framer-motion";
import { categoryType } from "@/types/categoryTypes";
import useCount from "@/hooks/useCount";

const initialValue = 10;

function TypesData({
  categories,
  categoriesSelected,
  onClick,
}: {
  categories: categoryType[];
  categoriesSelected: string[];
  onClick: (name: string) => void;
}) {
  const { count, addCount, restCount } = useCount(initialValue);
  categories = categories.sort((a, b) => {
    if (
      categoriesSelected.includes(a.name) &&
      !categoriesSelected.includes(b.name)
    ) {
      return -1;
    }
    return 1;
  });

  return (
    <motion.section
      layout
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <motion.section
        layout
        style={{ height: "auto" }}
        className={Style.containerTypes}
      >
        <AnimatePresence>
          {categories.slice(0, count).map((type, key) => (
            <ItemType
              isSelect={categoriesSelected.includes(type.name)}
              type={type.name}
              key={key}
              onClick={onClick}
            />
          ))}
        </AnimatePresence>
      </motion.section>
      {categories.length > 12 && (
        <motion.article
          onClick={() =>
            count === initialValue
              ? addCount(categories.length - initialValue)
              : restCount()
          }
          animate={count !== initialValue ? "open" : "closed"}
          variants={variantsArrow}
          className={Style.arrowDropDown}
          transition={{ duration: 0.2 }}
          whileHover={count !== initialValue ? hoverOpenArrow : hoverArrow}
        >
          <ArrowDropDownIcon />
        </motion.article>
      )}
    </motion.section>
  );
}

const variantsArrow = {
  open: { rotateZ: 180 },
  closed: { rotateZ: 0 },
};
const hoverOpenArrow = { translateY: -20, scale: 1.5 };
const hoverArrow = { translateY: 20, scale: 1.5 };
export default TypesData;

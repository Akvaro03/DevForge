"use client";

import { ReactElement } from "react";
import Style from "./Filter.module.css";
import { motion } from "framer-motion";

function CustomBottom({
  tittle,
  icon,
  onClick,
  isCircle = false,
}: HeaderProps) {
  console.log(isCircle);
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={isCircle ? Style.customBottomCircle : Style.customBottom}
    >
      {icon}
      {tittle}
    </motion.article>
  );
}

interface HeaderProps {
  tittle?: string;
  icon?: ReactElement;
  onClick?: () => void;
  isCircle?: boolean;
}

export default CustomBottom;

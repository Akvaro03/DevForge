"use client";

import { ReactElement } from "react";
import Style from "./Filter.module.css";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

function CustomBottom({
  tittle,
  icon,
  onClick,
  isCircle = false,
  toolTip,
}: HeaderProps) {
  return (
    <Tooltip title={toolTip}>
      <motion.article
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        className={isCircle ? Style.customBottomCircle : Style.customBottom}
      >
        {icon}
        {tittle}
      </motion.article>
    </Tooltip>
  );
}

interface HeaderProps {
  tittle?: string;
  icon?: ReactElement;
  onClick?: () => void;
  isCircle?: boolean;
  toolTip?: string;
}

export default CustomBottom;

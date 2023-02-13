import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="spinner__container"
      key="aang"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
};

export default Loader;

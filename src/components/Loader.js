import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      className="spinner__container flex--v"
      key="aang"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="spinner flex--v" style={{ gap: "0.5rem" }}>
        <p>Loading...</p>
        <div className="expanding-border" style={{ width: "10rem" }} />
      </div>
    </motion.div>
  );
};

export default Loader;

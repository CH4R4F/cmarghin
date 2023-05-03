"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`max-w-5xl mx-auto py-32 leading-9 px-6 ${popins.className}`}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;

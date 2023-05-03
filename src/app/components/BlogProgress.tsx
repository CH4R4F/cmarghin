"use client";

import { motion, useScroll } from "framer-motion";

function Progress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed z-30 top-0 left-0 w-full h-2 from-[#009ae4] via-[#5e00ff] to-[#ff3b00]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default Progress;

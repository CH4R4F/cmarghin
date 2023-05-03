"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { CgEditBlackPoint } from "react-icons/cg";

type Props = {
  date: string;
  title: string;
  description: string;
};

const TimeLineStep = ({ date, title, description }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.8, margin: "0px 300px 0px 300px" }}
      ref={targetRef}
      className="flex"
    >
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <CgEditBlackPoint className="w-5 h-5 text-slate-600 dark:text-slate-100" />
          </div>
        </div>
        <div className="w-px h-full bg-slate-300" />
      </div>
      <div className="pb-8 ">
        <p className="mb-2 text-sm text-slate-600 dark:text-slate-500">
          {date}
        </p>
        <p className="mb-2 text-xl font-bold text-slate-600 dark:text-slate-200">
          {title}
        </p>
        <p className="text-slate-700 dark:text-slate-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimeLineStep;

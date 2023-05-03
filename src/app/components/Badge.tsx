"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Badge = () => {
  const [show, setShow] = useState(true);

  // hide after 5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="bg-slate-900 dark:bg-stone-50 fixed bottom-0 left-0 w-full"
    >
      <div className="px-4 py-3 flex items-center justify-between text-white dark:text-slate-800 md:px-8">
        <div className="flex gap-x-4 items-center">
          <div className="w-10 h-10 flex-none rounded-lg bg-stone-200 dark:bg-slate-800 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-slate-900 dark:text-stone-50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
              />
            </svg>
          </div>
          <p className="py-2 font-medium">
            This page is still under development. You may experience some
            unexpected behavior, or uncompleted data;
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Badge;

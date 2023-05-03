"use client";

import { BsTwitter, BsGithub, BsBehance } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { LazyMotion, motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-6">
      <ul className="flex flex-wrap items-center space-x-10">
        <motion.li
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <a
            aria-label="Follow me on Github"
            href="https://www.github.com/ch4r4f"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="transition-all duration-300 h-7 w-7 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" />
          </a>
        </motion.li>
        <motion.li
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <a
            aria-label="Follow me on Twitter"
            href="https://twitter.com/cmarghin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsTwitter className="transition-all duration-300 h-7 w-7 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" />
          </a>
        </motion.li>
        <motion.li
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          <a
            aria-label="Follow me on LinkedIn"
            href="https://www.linkedin.com/in/charaf-marghin/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GrLinkedinOption className="transition-all duration-300 h-7 w-7 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" />
          </a>
        </motion.li>
        <motion.li
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <a
            aria-label="Follow me on Behance"
            href="https://www.behance.net/charafmarghin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsBehance className="transition-all duration-300 h-7 w-7 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100" />
          </a>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;

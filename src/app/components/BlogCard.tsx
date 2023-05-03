"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { motion } from "framer-motion";

const BlogCard = ({
  title,
  description,
  tags,
  date,
  cover,
  slug,
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-slate-800"
    >
      <Link href={`/blog/${slug}`}>
        <CldImage
          height={265}
          width={700}
          crop="thumb"
          src={cover}
          alt={title}
        />
      </Link>
      <div className="p-6">
        <div>
          <div className="flex items-center gap-4">
            {tags &&
              tags.data.map((tag) => (
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  key={tag.id}
                  className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 select-none"
                >
                  {tag.attributes.name}
                </motion.span>
              ))}
          </div>
          <Link
            href={`/blog/${slug}`}
            className="block mt-2 text-xl font-semibold text-slate-800 transition-colors duration-300 transform dark:text-white hover:text-slate-600 hover:underline"
            tabIndex={0}
            role="link"
          >
            {title}
          </Link>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <span className="mx-1 text-xs text-slate-600 dark:text-slate-300">
              {date}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

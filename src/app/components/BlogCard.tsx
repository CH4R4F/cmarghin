"use client";

import { CldImage } from "next-cloudinary";
import Link from "next/link";

const BlogCard = ({
  title,
  description,
  tags,
  date,
  cover,
  slug,
}: BlogCardProps) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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
                <span
                  key={tag.id}
                  className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400 select-none"
                >
                  {tag.attributes.name}
                </span>
              ))}
          </div>
          <Link
            href={`/blog/${slug}`}
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex={0}
            role="link"
          >
            {title}
          </Link>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
              {date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

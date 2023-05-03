"use client";

import { Open_Sans } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/prism.css";
import "@/styles/blog.scss";
import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";
import { CldImage } from "next-cloudinary";

import "prismjs/components/prism-javascript";

import "prismjs/components/prism-css";

import "prismjs/components/prism-jsx";
import BlogFooter from "./BlogFooter";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const Article = ({
  content,
  image,
  alt,
  title,
  slug,
  description,
}: {
  content: string;
  image: string;
  alt: string;
  title: string;
  slug: string;
  description: string;
}) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      {/* image */}
      <CldImage
        className="w-full object-cover rounded-md mt-10"
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
      />
      <ReactMarkdown
        className={`article ${openSans.className}`}
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-slate-900 mt-10 dark:text-white">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-slate-900 mt-10 dark:text-white">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-slate-900 mt-10 dark:text-white">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-10 text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400 dark:marker:text-white my-3 marker:text-black">
              {children}
            </ul>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-slate-900 dark:text-white/80">
              {children}
            </strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-3 bg-slate-300 dark:bg-slate-800 py-3 pl-6 pr-4 border-l-4 border-slate-700 dark:border-slate-400 !text-slate-800 rounded-tr-lg rounded-br-lg">
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => (
            <CldImage
              className="w-full object-cover rounded-md mt-10"
              src={src as string}
              alt={alt as string}
              width={1920}
              height={1080}
              sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
            />
          ),
          a: ({ children, href }) => {
            if (href?.startsWith("http")) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {children}
                </a>
              );
            } else {
              return (
                <Link
                  href={href as string}
                  className="text-blue-500 hover:underline"
                >
                  {children}
                </Link>
              );
            }
          },
        }}
      >
        {content}
      </ReactMarkdown>
      <BlogFooter
        url={`https://www.cmarghin.com/blog/${slug}`}
        title={title}
        quote={description}
      />
    </>
  );
};

export default Article;

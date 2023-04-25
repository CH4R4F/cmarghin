"use client";

import { Open_Sans } from "next/font/google";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/prism.css";
import "@/styles/blog.scss";
import Link from "next/link";
import { useEffect } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-javascript";

import "prismjs/components/prism-css";

import "prismjs/components/prism-jsx";

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const Article = ({ content }: { content: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ReactMarkdown
      className={`article ${openSans.className}`}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-gray-900 dark:text-white">{children}</h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-gray-900 dark:text-white">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-gray-900 dark:text-white">{children}</h3>
        ),
        p: ({ children }) => (
          <p className="text-xl leading-relaxed font-medium text-gray-500 dark:text-gray-400">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-gray-900 dark:text-white">
            {children}
          </strong>
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
  );
};

export default Article;

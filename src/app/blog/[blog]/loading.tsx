"use client";

import Skeleton from "react-loading-skeleton";
import { useTheme } from "next-themes";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={`max-w-5xl mx-auto py-32  px-6 `}>
      <div className="mt-5">
        <Skeleton
          width={200}
          baseColor={resolvedTheme === "dark" ? "#4B5563" : "#D1D5DB"}
          highlightColor={resolvedTheme === "dark" ? "#1F2937" : "#F3F4F6"}
        />
      </div>
      <div className="mt-5">
        <Skeleton
          baseColor={resolvedTheme === "dark" ? "#4B5563" : "#D1D5DB"}
          highlightColor={resolvedTheme === "dark" ? "#1F2937" : "#F3F4F6"}
          height={30}
        />
      </div>
      <div className="mt-10">
        <Skeleton
          baseColor={resolvedTheme === "dark" ? "#4B5563" : "#D1D5DB"}
          highlightColor={resolvedTheme === "dark" ? "#1F2937" : "#F3F4F6"}
          count={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default Loading;

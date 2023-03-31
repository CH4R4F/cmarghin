import { Poppins } from "next/font/google";
import Link from "next/link";
import Footer from "./components/Footer";

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`max-w-5xl mx-auto py-32 leading-9 px-6 ${popins.className}`}
    >
      <h1 className="text-gray-900 dark:text-gray-100 leading-tight text-5xl md:text-6xl ">
        I&apos;m{" "}
        <span data-text="Charaf_Marghin" className="md:glitch">
          Charaf Marghin
        </span>
      </h1>
      <p className="text-justify md:text-start text-gray-500 dark:text-gray-300 mt-8 text-[16px]">
        a Moroccan-based software developer who&apos;s into all things
        Javascript and open source. I love building digital things that live on
        the internet, like websites, applications, and scripts. My passion lies
        in crafting functional and efficient solutions that work seamlessly on
        any device. Always striving to keep up with the latest technologies,
        I&apos;m committed to delivering digital experiences that are both
        user-friendly and visually appealing.
      </p>
      <p className="text-gray-500 dark:text-gray-300 mt-4 text-[16px]">
        You can see my{" "}
        <Link className="text-link" href="/projects">
          projects
        </Link>
        , or read my{" "}
        <Link className="text-link" href="/blog">
          articles
        </Link>
        , or{" "}
        <Link className="text-link" href="/contact">
          contact
        </Link>{" "}
        me.
      </p>

      <Footer />
    </div>
  );
}

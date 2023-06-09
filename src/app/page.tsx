import Link from "next/link";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <h1 className="text-slate-900 dark:text-slate-100 leading-tight text-5xl md:text-6xl ">
        I&apos;m{" "}
        <span data-text="Charaf_Marghin" className="md:glitch">
          Charaf Marghin
        </span>
      </h1>
      <p className="text-justify md:text-start text-slate-600 leading-relaxed text-lg dark:text-slate-300 mt-8 text-[16px]">
        a Moroccan-based software developer who&apos;s into all things
        Javascript and open source. I love building digital things that live on
        the internet, like websites, applications, and scripts. My passion lies
        in crafting functional and efficient solutions that work seamlessly on
        any device. Always striving to keep up with the latest technologies,
        I&apos;m committed to delivering digital experiences that are both
        user-friendly and visually appealing.
      </p>
      <p className="text-slate-500 dark:text-slate-300 mt-4 text-[16px]">
        You can see my{" "}
        <a
          className="text-link"
          href="https://www.github.com/ch4r4f"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="See my projects on github"
        >
          projects
        </a>
        , or read my{" "}
        <Link aria-label="read my articles" className="text-link" href="/blog">
          articles
        </Link>
        , or{" "}
        <Link aria-label="contact me" className="text-link" href="/contact">
          contact
        </Link>{" "}
        me.
      </p>

      <Footer />
    </Wrapper>
  );
}

import { BsTwitter, BsGithub, BsBehance } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="py-6">
      <ul className="flex flex-wrap items-center space-x-10">
        <li>
          <a
            aria-label="Follow me on Github"
            href="https://www.github.com/ch4r4f"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub className="transition-all duration-300 h-5 w-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" />
          </a>
        </li>
        <li>
          <a
            aria-label="Follow me on Twitter"
            href="https://twitter.com/cmarghin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsTwitter className="transition-all duration-300 h-5 w-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" />
          </a>
        </li>
        <li>
          <a
            aria-label="Follow me on LinkedIn"
            href="https://www.linkedin.com/in/charaf-marghin/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GrLinkedinOption className="transition-all duration-300 h-5 w-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" />
          </a>
        </li>
        <li>
          <a
            aria-label="Follow me on Behance"
            href="https://www.behance.net/charafmarghin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsBehance className="transition-all duration-300 h-5 w-5 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

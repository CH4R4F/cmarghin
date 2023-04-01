import { Poppins } from "next/font/google";
import { TbDotsVertical } from "react-icons/tb";
import TimeLineStep from "../components/TimeLineStep";

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const page = () => {
  return (
    <div
      className={`max-w-5xl mx-auto py-32 leading-9 px-6 ${popins.className}`}
    >
      <h1 className="text-gray-900 dark:text-gray-100 leading-tight text-5xl md:text-6xl">
        About Me
      </h1>
      <div className="2/3 mt-14">
        <TimeLineStep
          date="May 2002"
          title="The first birth"
          description="Friday May 10th 2002, I was born in 'Er-rich' a small town in the south-east of Morocco, I was the first child of my parents."
        />
        <TimeLineStep
          date="September 2019"
          title="Graduation from high school"
          description="In 2019, I graduated from high school with a diploma in hand and dreams of attending a top computer science school or university. Unfortunately, due to a combination of low grades and limited availability, I was not accepted into any of my preferred programs. Disheartened, I ended up studying civil engineering instead - a decision I regret, as it's not where my true passion lies. Looking back, I wish I had been more focused and disciplined in my studies and prioritized my love for computer science."
        />
        <TimeLineStep
          date="2020"
          title="Covid-19 pandemic"
          description="The COVID-19 pandemic began in the last quarter of 2019, and as a result, the government closed all schools and universities. While this initially left me stuck at home, I saw it as an opportunity to pursue my passion for computer science. I vividly remember completing Harvard's CS50 course and feeling a sense of accomplishment. From there, I continued to learn and eventually started focusing on web development."
        />
        <TimeLineStep
          date="October 2021"
          title="YouCode"
          description="After earning my civil engineering diploma in just two years (mostly from home), I was thrilled to embark on a career in software development. I focused on web development, eventually being accepted into YouCode, the premier software development school in Morocco. Their unique approach to learning, which emphasized project-based problem solving and peer-to-peer teaching, felt familiar and comfortable to me. I'm grateful for the opportunity to continue learning and sharing knowledge with others."
        />
        <TimeLineStep
          date="August 2022"
          title="Freelancing"
          description="During my internship, I picked up freelancing and built websites for small businesses. Eventually, I landed a freelance gig with Scandiweb, an e-commerce solutions company based in Latvia. As a junior developer, I gained valuable technical and soft skills that I still use today. I'm grateful for the experience and all that I learned."
        />
        <TimeLineStep
          date="April 2021"
          title="Me in front of the world"
          description="I finished my study at Youcode, right now I'm a full stack developer intern at 'Cegedim', and I'm looking forward to grow and learn more and more."
        />
        <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <TbDotsVertical className="w-5 h-5 text-gray-600 dark:text-gray-100" />
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">
              Continuously learning ...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

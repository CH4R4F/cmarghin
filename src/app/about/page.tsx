import { Poppins } from "next/font/google";
import { MdOutlineRocketLaunch } from "react-icons/md";
import TimeLineStep from "../components/TimeLineStep";
import Badge from "../components/Badge";

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
          description="In 2019, I completed my high school education and aspired to attend a reputable computer science institution. However, I was faced with the challenge of limited availability and low grades, which resulted in not being admitted into any of my preferred programs. Despite the setback, I persevered and pursued civil engineering as an alternative field of study."
        />
        <TimeLineStep
          date="2020"
          title="Covid-19 pandemic"
          description="
          As a result of the COVID-19 pandemic, all schools and universities were temporarily closed by the government. During this time, I seized the opportunity to explore my interest in computer science. I enrolled in Harvard's CS50 course, which provided me with a strong foundation in the field and boosted my confidence. Building on this, I continued to expand my knowledge and eventually specialized in web development."
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
          title="Internship at Cegedim"
          description="I finished my study at Youcode, right now I'm a full stack developer intern at 'Cegedim' and I'm looking forward to grow and learn more and more."
        />
        {/* <div className="flex">
          <div className="flex flex-col items-center mr-4">
            <div>
              <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                <MdOutlineRocketLaunch className="w-5 h-5 text-gray-600 dark:text-gray-100" />
              </div>
            </div>
          </div>
          <div className="pt-1">
            <p className="mb-2 text-lg font-bold text-gray-600 dark:text-gray-200">
              Continuously learning and growing
            </p>
          </div>
        </div> */}
      </div>
      <Badge />
    </div>
  );
};

export default page;

import { BsCalendarCheck } from "react-icons/bs";

type Props = {
  date: string;
  title: string;
  description: string;
};

const TimeLineStep = ({ date, title, description }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            <BsCalendarCheck className="w-5 h-5 text-gray-600 dark:text-gray-100" />
          </div>
        </div>
        <div className="w-px h-full bg-gray-300" />
      </div>
      <div className="pb-8 ">
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-500">{date}</p>
        <p className="mb-2 text-xl font-bold text-gray-600 dark:text-gray-200">
          {title}
        </p>
        <p className="text-gray-700 dark:text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default TimeLineStep;

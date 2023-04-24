import Image from "next/image";

const BlogCard = ({ title, description, tags, date, cover }) => {
  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image className="object-cover w-full h-64" src={cover} alt={title} />
      <div className="p-6">
        <div>
          <div className="flex items-center gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex={0}
            role="link"
          >
            {title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
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

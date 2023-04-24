import fetchAPI from "@/lib/api";
import { Poppins } from "next/font/google";
import BlogCard from "../components/BlogCard";

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const page = async () => {
  const info: fetchAPIProps = {
    path: "/api/blogs",
    urlParams: {
      populate: ["cover", "tags"],
    },
    options: {
      next: {
        revalidate: 60,
      },
    },
  };

  let blogs: { data: Article[] } = { data: [] };

  try {
    blogs = await fetchAPI(info);
    // console.log(blogs?.data[0].attributes.cover);
  } catch (error) {
    console.log(error);
  }

  return (
    <div
      className={`max-w-5xl mx-auto py-32 leading-9 px-6 ${popins.className}`}
    >
      <h1 className="text-gray-900 dark:text-gray-100 leading-tight text-5xl md:text-6xl">
        Blogs
      </h1>
      <p className="text-justify md:text-start text-gray-500 dark:text-gray-300 mt-8 text-[16px]">
        Here are some of my articles, I write about web development, open
        source, things I learned and more.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs &&
          blogs.data.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.attributes.title}
              description={blog.attributes.description}
              cover={blog.attributes.cover.data.attributes.url}
              tags={blog.attributes.tags}
              slug={blog.attributes.slug}
              date={blog.attributes.date}
            />
          ))}
      </div>
    </div>
  );
};

export default page;

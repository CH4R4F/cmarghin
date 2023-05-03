import fetchAPI from "@/lib/api";
import BlogCard from "../components/BlogCard";
import Wrapper from "../components/Wrapper";

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
  } catch (error) {
    console.log(error);
  }

  return (
    <Wrapper>
      <h1 className="text-slate-900 dark:text-slate-100 leading-tight text-5xl md:text-6xl">
        Blogs
      </h1>
      <p className="text-justify md:text-start text-slate-500 dark:text-slate-300 mt-8 text-[16px]">
        Here are some of my articles, I write about web development, open
        source, and topics I&apos;m learning.
      </p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.data.map((blog) => (
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
      {!blogs.data.length && (
        <div className="text-center">
          <h1 className="text-slate-900 text-center opacity-25 font-extrabold  dark:text-slate-100 leading-tight text-5xl md:text-6xl">
            No blogs found
          </h1>
        </div>
      )}
    </Wrapper>
  );
};

export default page;

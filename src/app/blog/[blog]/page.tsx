import fetchAPI from "@/lib/api";
import { Poppins, Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import Link from "next/link";
import Article from "@/app/components/Article";

const popins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const Blog = async ({ params }: { params: { blog: string } }) => {
  const slug = params.blog;

  const info: fetchAPIProps = {
    path: "/api/blogs",
    urlParams: {
      populate: ["cover", "tags"],
      filters: {
        ["slug"]: {
          ["$eq"]: slug,
        },
      },
    },
    options: {
      next: {
        revalidate: 60,
      },
    },
  };

  let blog: { data: Article[] } = {} as { data: Article[] };

  try {
    blog = await fetchAPI(info);
  } catch (error) {
    console.log(error);
  }

  if (!blog.data || !blog.data.length) {
    notFound();
  }

  return (
    <div
      className={`max-w-5xl mx-auto py-32 leading-9 px-6 ${popins.className}`}
    >
      <article className="blog">
        {/* date */}
        <span className={`date ${openSans.className}`}>
          Posted on {new Date(blog.data[0].attributes.date).toDateString()}
        </span>
        {/* title */}
        <h1 className={`title dark:text-white`}>
          {blog.data[0].attributes.title}
        </h1>
        {/* tags */}
        <div className="tags flex flex-wrap space-x-4">
          {blog.data[0].attributes.tags.data.map((tag) => {
            const lowerCase =
              tag.attributes.name.toLowerCase() as keyof typeof tagColor;

            const tagColor = {
              javascript: "bg-yellow-400",
              typescript: "bg-blue-400",
              react: "bg-blue-500",
              node: "bg-green-400",
              php: "bg-purple-400",
              laravel: "bg-red-400",
            };

            return (
              <Link
                href={`/blog/tag/${tag.attributes.name}`}
                key={tag.id}
                className={`tag ${
                  openSans.className
                } px-3 rounded-md hover:underline
                ${tagColor[lowerCase] || "bg-gray-400"}
                `}
              >
                #{lowerCase}
              </Link>
            );
          })}
        </div>
        <Article content={blog.data[0].attributes.content} />
      </article>
    </div>
  );
};

export default Blog;

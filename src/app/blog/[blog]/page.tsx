import fetchAPI from "@/lib/api";
import { Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import Article from "@/app/components/Article";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import type { Metadata } from "next";
import Wrapper from "@/app/components/Wrapper";
import Progress from "@/app/components/BlogProgress";

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
    <Wrapper>
      <Progress />
      <article className="blog">
        {/* date */}
        <span className={`date ${openSans.className}`}>
          Posted on {new Date(blog.data[0].attributes.date).toDateString()}
        </span>
        {/* title */}
        <h1 className={`title dark:!text-white`}>
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
              <span
                key={tag.id}
                className={`tag ${
                  openSans.className
                } px-3 rounded-md select-none
                ${tagColor[lowerCase] || "bg-slate-400"}
                `}
              >
                #{lowerCase}
              </span>
            );
          })}
        </div>
        <Article
          alt={blog.data[0].attributes.title}
          image={blog.data[0].attributes.cover.data.attributes.url}
          content={blog.data[0].attributes.content}
          title={blog.data[0].attributes.title}
          slug={blog.data[0].attributes.slug}
          description={blog.data[0].attributes.description}
        />
      </article>
      <ScrollToTopButton />
    </Wrapper>
  );
};

export default Blog;

export async function generateMetadata({
  params,
}: {
  params: { blog: string };
}): Promise<Metadata> {
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

  let blog = await fetchAPI<{ data: Article[] }>(info);

  return {
    title: blog.data[0].attributes.title,
    description: blog.data[0].attributes.description,
    openGraph: {
      title: blog.data[0].attributes.title,
      description: blog.data[0].attributes.description,
      images: [
        {
          url: blog.data[0].attributes.cover.data.attributes.url,
          width: 800,
          height: 600,
          alt: blog.data[0].attributes.title,
        },
      ],
    },
    twitter: {
      title: blog.data[0].attributes.title,
      description: blog.data[0].attributes.description,
      images: [
        {
          url: blog.data[0].attributes.cover.data.attributes.url,
        },
      ],
    },
  };
}

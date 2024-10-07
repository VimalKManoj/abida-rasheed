import Image from "next/image";
import React from "react";
import { Della_Respira, Nunito_Sans } from "next/font/google";
import BlogCard from "@/components/Blog/BlogCard";
import Link from "next/link";

const font = Della_Respira({
  subsets: ["latin"],
  weight: "400",
});

const Secfont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "200", "300", "500", "600", "700", "800", "900", "1000"],
});

type BlogProps = {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
};

type RecentBlogsProps = {
  blogs: BlogProps[];
};

function Blogs() {
  return (
    <div className="w-screen min-h-screen p-6  xl:px-14 2xl:px-20  flex flex-col justify-center items-center  ">
      <h1
        className={`${font.className} text-3xl md:text-5xl 2xl:text-6xl md:w-2/3 my-16 md:my-28 text-center `}
      >
        Explore Abida's culinary journey and upcoming experiences
      </h1>
      <RecentBlogs blogs={blogData} />{" "}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold py-10 border-t border-amber-950">
          All blog posts
        </h2>
        <div className="flex justify-between flex-wrap">
          <BlogCard src="https://images.unsplash.com/photo-1544240790-eaadf65d012d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1477925518023-22b33cbd802c?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1478145189398-ec6f9e328b76?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1544240790-eaadf65d012d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1477925518023-22b33cbd802c?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1478145189398-ec6f9e328b76?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1544240790-eaadf65d012d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1477925518023-22b33cbd802c?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <BlogCard src="https://images.unsplash.com/photo-1478145189398-ec6f9e328b76?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </section>
    </div>
  );
}

const RecentBlogs = ({ blogs }: RecentBlogsProps) => {
  const featuredBlog = blogs[0];
  const otherBlogs = blogs.slice(1);

  return (
    <section>
      <h2 className={`${font.className} text-xl font-bold mb-10 self-start`}>
        Recent blog posts
      </h2>

      {/* Main flex container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Featured blog post */}
        <div className="flex-1 lg:mr-8">
          <Link href={`/blogs/blog-name`}>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={1000}
                height={1000}
                alt="image"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              <p className="text-gray-600 mb-2"> • {featuredBlog.date}</p>
              <h3 className="text-2xl font-bold mb-4">{featuredBlog.title}</h3>
              <p className="text-gray-600 mb-4">{featuredBlog.excerpt}</p>
              <div className="flex gap-2">
                {featuredBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className=" text-amber-950 px-2 border border-amber-950  py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>

        {/* Smaller blog posts */}
        <div className="flex flex-col flex-1 gap-8 lg:w-1/3">
          {otherBlogs.map((blog) => (
            <Link
              href={`/blogs/blog-name`}
              key={blog.id}
              className="flex h-full justify-between items-start gap-4"
            >
              {/* Image container */}
              <div className="h-full w-1/3 flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1596450514735-111a2fe02935?q=80&w=3211&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={1000}
                  height={1000}
                  alt="image"
                  className=" h-44 object-cover rounded-lg"
                />
              </div>

              {/* Blog content */}
              <div className="flex-1">
                <p className="text-gray-600 mb-2">• {blog.date}</p>
                <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                <p className="text-gray-600 line-clamp-2">{blog.excerpt}</p>
                <div className="flex gap-2 mt-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" text-amber-950 px-2 border border-amber-950  py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sample blog data
const blogData = [
  {
    id: 1,
    author: "Olivia Rhye",
    date: "20 Jan 2024",
    title: "Conversations with London Makr & Co.",
    excerpt:
      "We sat down with London's fast-growing brand and product design studio...",
    image:
      "https://images.unsplash.com/photo-1611078482886-1a89c9d0c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBlb3BsZXxlbnwwfHx8fDE2MzgwMTM3NjU&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["Design", "Research", "Interviews"],
  },
  {
    id: 2,
    author: "Phoenix Baker",
    date: "19 Jan 2024",
    title: "A Relentless Pursuit of Perfection in Product Design",
    excerpt:
      "I began to notice that there was a sharp contrast between well-made...",
    image:
      "https://images.unsplash.com/photo-1597098847204-1c3d0c6b8d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDl8fHBlb3BsZXxlbnwwfHx8fDE2MzgwMTM3NjU&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["Design", "Research"],
  },
  {
    id: 3,
    author: "Lana Steiner",
    date: "18 Jan 2024",
    title: "How to Run a Successful Business With Your Partner",
    excerpt:
      "Starting a business with your spouse or significant other is an exciting but...",
    image:
      "https://images.unsplash.com/photo-1551863543-47b8c8a58e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE3fHxwZW9wbGV8ZW58MHx8fHwxNjM4MDEzNzY1&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["Business", "Research"],
  },
  {
    id: 4,
    author: "Lana Steiner",
    date: "18 Jan 2024",
    title: "Why Food Matters — Disease Prevention & Treatment",
    excerpt:
      "Eating more plants and less meat has been tied to a longer life and a...",
    image:
      "https://images.unsplash.com/photo-1603430320463-b0c2432b49a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxlbnZpcm9ubWVudHxlbnwwfHx8fDE2MzgwMTM3NjU&ixlib=rb-1.2.1&q=80&w=400",
    tags: ["Health", "Research"],
  },
];

export default Blogs;

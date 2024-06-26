import React from "react";
import { sortBlogs } from "../../utils";
import BlogLayoutone from "../Blog/BlogLayoutone";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
export const FeautredPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      <h2
        id="h2"
        className="w-full inline-block text-4xl font-bold capitalize "
      >
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-16">
        <article className="col-span-1 row-span-2 relative">
          <BlogLayoutone blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[5]} />
        </article>
        <article className="col-span-1 row-span-1 relative">
          <BlogLayoutTwo blog={sortedBlogs[4]} />
        </article>
      </div>
    </section>
  );
};

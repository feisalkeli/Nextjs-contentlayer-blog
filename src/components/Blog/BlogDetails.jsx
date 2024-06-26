import { format, parseISO } from "date-fns";
import React from "react";
import Link from "next/link";
import ViewCounter from "./ViewCounter";
const BlogDetails = ({ blog, slug }) => {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d yyyy")}
      </time>
      <ViewCounter slug={slug} />
      <div>{blog.readingTime.text}</div>
      <Link href={`/categories/${blog.tags[0]}`} className="m-3">
        #{blog.slug?.[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;

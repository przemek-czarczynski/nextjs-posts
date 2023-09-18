// Import next/rect components
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Import own components

import { PostsList } from "../components/PostsList";
import Pagination from "../components/Pagination";

// Import own functions
import getTotalCountPosts from "@/lib/getTotalCountPosts";
import Loading from "../loading";

export default async function PostsPage({ params, searchParams }) {
  if (params["posts"] !== "posts") {
    notFound();
  }
  if (
    !searchParams.hasOwnProperty("_page") ||
    searchParams["_page"].match(/^[0-9]*$/) == undefined ||
    searchParams["_page"].length == 0
  ) {
    notFound();
  }

  let page = searchParams["_page"];
  const totalCountPosts = await getTotalCountPosts();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <PostsList page={page} />
        <Pagination currentPage={page} totalCountPosts={totalCountPosts} />
      </Suspense>
    </>
  );
}

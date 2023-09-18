// Import react/next components
import Image from "next/image";
import { Suspense } from "react";

// Import own functions
import getTotalCountPosts from "@/lib/getTotalCountPosts";

// Import own components
import { PostsList } from "./components/PostsList";
import Pagination from "./components/Pagination";
import Loading from "./loading";

export default async function Home() {
  const totalCountPosts = await getTotalCountPosts();
  return (
    <>
      <Suspense fallback={<Loading />}>
        <PostsList page={1} />
        <Pagination currentPage={1} totalCountPosts={totalCountPosts} />
      </Suspense>
    </>
  );
}

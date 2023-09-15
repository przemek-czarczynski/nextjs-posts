// Import react/next components
import Image from "next/image";

// Import own components
import { PostsList } from "./components/PostsList";

export default function Home() {
  return (
    <main className="flex flex-grow justify-center">
      <div className="w-[80%] bg-white">
        <PostsList />
      </div>
    </main>
  );
}

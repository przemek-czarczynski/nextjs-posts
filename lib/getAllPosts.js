export default async function getAllPosts(currentPage) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
  );
  if (!res.ok) throw new Error("failed to fetch posts");

  return res.json();
}

export default async function getTotalCountPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=1`
  );

  if (!res.ok) throw new Error("failed to fetch posts");

  return res.headers.get("x-total-count");
}

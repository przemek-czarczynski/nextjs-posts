export default async function getAllPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10`
  );
  if (!res.ok) throw new Error("failed to fetch posts");

  return res.json();
}

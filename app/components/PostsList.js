// Import own functions
import getAllPosts from "@/lib/getAllPosts";
import getUser from "@/lib/getUser";

// Import own components
import { Post } from "./Post";

// Import styles
import styles from "./../styles/postsStyles.module.css";

export const PostsList = async ({ page }) => {
  let allPosts = [];
  const posts = await getAllPosts(page);

  for (let post of posts) {
    let user = await getUser(post.userId);
    allPosts.push({
      ...post,
      username: user.username,
    });
  }

  const content = (
    <>
      <section className={styles.postsContainer}>
        {allPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );

  return content;
};

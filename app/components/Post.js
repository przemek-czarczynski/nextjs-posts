// Import react/next components
import Link from "next/link";

// Import styles
import styles from "./../styles/postsStyles.module.css";

export const Post = ({ post }) => {
  return (
    <div key={post.id} className={styles.postCard}>
      <h2>{post.title}</h2>
      <p className="pb-2">{post.body}</p>
      <Link className={styles.cardAuthor} href={`/users/${post.userId}`}>
        <p>{post.username}</p>
      </Link>
    </div>
  );
};

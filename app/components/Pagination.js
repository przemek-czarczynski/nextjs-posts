"use client";
// Import next/rect hooks
import { useRouter } from "next/navigation";

// Import styles
import styles from "./../styles/paginationStyles.module.css";

export default function Pagination({ currentPage, totalCountPosts }) {
  const router = useRouter();
  const postsPerPage = 10;
  const x = totalCountPosts % postsPerPage;
  let nrPages = 1;

  if (x == 0) {
    nrPages = Math.floor(totalCountPosts / postsPerPage);
  } else {
    nrPages = Math.floor(totalCountPosts / postsPerPage) + 1;
  }

  const clickHandler = (e) => {
    router.push(`/posts?_page=${e}`);
  };

  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage == 1 ? true : ""}
        onClick={() => clickHandler(1)}
        className={styles.button}
      >
        {"<<"}
      </button>
      <button
        disabled={currentPage == 1 ? true : ""}
        onClick={() => clickHandler(--currentPage)}
        className={styles.button}
      >
        {"<"}
      </button>
      <span className="text-center p-2 w-10">{currentPage}</span>
      <button
        disabled={currentPage == nrPages ? true : ""}
        onClick={() => clickHandler(++currentPage)}
        className={styles.button}
      >
        {">"}
      </button>
      <button
        disabled={currentPage == nrPages ? true : ""}
        onClick={() => clickHandler(nrPages)}
        className={styles.button}
      >
        {">>"}
      </button>
    </div>
  );
}

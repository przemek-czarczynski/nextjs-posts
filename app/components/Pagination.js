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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        disabled={currentPage == 1 ? true : ""}
        onClick={() => clickHandler(--currentPage)}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <span className="text-lg text-center p-2 w-10">{currentPage}</span>
      <button
        disabled={currentPage == nrPages ? true : ""}
        onClick={() => clickHandler(++currentPage)}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        disabled={currentPage == nrPages ? true : ""}
        onClick={() => clickHandler(nrPages)}
        className={styles.button}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
}

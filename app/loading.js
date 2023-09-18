import styles from "./styles/postsStyles.module.css";
export default function Loading() {
  return (
    <>
      <section className={styles.postsContainer}>
        <span className="text-2xl font-semibold mt-20">Loading data...</span>
      </section>
    </>
  );
}

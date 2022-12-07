import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a> with
          Middleware test
        </h1>
        <div className={styles.grid}>
          <Link href="/no-middleware" className={styles.card}>
            <h2>Page: no middleware &rarr;</h2>
          </Link>
          <Link href="/with-middleware" className={styles.card}>
            <h2>Page: with middleware &rarr;</h2>
          </Link>
        </div>
        <div className={styles.grid}>
          <a href="/api/no-middleware" target="_blank" className={styles.card}>
            <h2>Api: no middleware &rarr;</h2>
          </a>
          <a
            href="/api/with-middleware"
            target="_blank"
            className={styles.card}
          >
            <h2>Api: with middleware &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";
import Search from "./Search";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Worm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Reading</a> is dreaming with open eyes.
        </h1>

        <p className={styles.description}>
          Search the world's most comprehensive index of full-text books and find the perfect book for you.
        </p>

        <Search />
      </main>
    </div>
  );
}

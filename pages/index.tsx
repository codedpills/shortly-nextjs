import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shortly</title>
        <meta
          name="description"
          content="Build your brand's recognition and get detailed insights on how your links are performing."
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <h1>Url Shortener</h1>
    </div>
  );
}

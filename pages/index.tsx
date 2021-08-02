import Head from "next/head";

import Layout from "@/components/layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}

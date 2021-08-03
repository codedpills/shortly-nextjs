import Head from "next/head";

import Layout from "@/components/layout/Layout";
import Hero from "@/components/hero/Hero";
import CallToAction from "@/components/cta/CallToAction";

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

        <Hero />
        <CallToAction />
      </div>
    </Layout>
  );
}

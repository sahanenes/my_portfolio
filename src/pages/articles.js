import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Sahanenes | Articles Page</title>
        <meta name="description" content="content" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
          <AnimatedText text="Coming soon!" className="mb-16 "></AnimatedText>
        </Layout>
      </main>
    </>
  );
};

export default articles;

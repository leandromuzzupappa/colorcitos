import Head from "next/head";
import { Experience } from "@/components/organisms/experience/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pepitos</title>
        <meta name="description" content="Pepitos description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Experience />
      </main>
    </>
  );
}

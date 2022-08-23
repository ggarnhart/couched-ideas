import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-gray-900 bg-slate-100">
      <Head>
        <title>Couched Ideas</title>
        <meta
          name="description"
          content="Side Projects, often made from my couch."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="my-6 text-5xl font-light">Couched Ideas.</h1>
        <p className="my-2 text-lg">
          Small projects, often created on my couch.
        </p>
        <div className="flex">
          <a href="https://tablerunner.xyz" className="mr-4 hover:underline">
            Table Runner
          </a>
          <a href="https://ggarnhart.com" className="mr-4 hover:underline">
            Personal site
          </a>
          <a
            href="mailto:greg.garnhart12@gmail.com"
            className="mr-4 hover:underline"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

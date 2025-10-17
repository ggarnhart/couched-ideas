import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-screen text-gray-900 bg-slate-100">
      <Head>
        <title>Couched Ideas</title>
        <meta
          name="description"
          content="Side Projects, often made from my couch."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div>
          <h1 className="my-6 text-5xl font-light">Couched Ideas.</h1>
          <p className="my-2 text-lg">
            Small projects, often created on my couch.
          </p>
          <div className="flex space-x-12">
            <Link href="/uptown" className="hover:underline">
              Uptown
            </Link>
            <a href="https://tablerunner.xyz" className="hover:underline">
              Table Runner
            </a>
            <a href="https://ggarnhart.com" className="hover:underline">
              Personal site
            </a>
            <a
              href="mailto:hello@couchedideas.com"
              className="hover:underline"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      <footer className="py-4 text-center">
        <Link href="/privacy" className="text-sm text-gray-600 hover:underline">
          Privacy Policy
        </Link>
      </footer>
    </div>
  );
}

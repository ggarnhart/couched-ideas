import Link from "next/link";

export const metadata = {
  title: "Couched Ideas",
  description: "Side Projects, often made from my couch.",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-900 bg-slate-100">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div>
          <h1 className="my-6 text-5xl font-light">Couched Ideas.</h1>
          <p className="my-2 text-lg">
            Small projects, often created on my couch.
          </p>
          <div className="flex space-x-12">
            <Link href="/uptown" className="hover:underline">
              Uptown
            </Link>
            <div className="flex flex-col items-center">
              <a href="https://tablerunner.xyz" className="hover:underline">
                Table Runner
              </a>
              <span className="text-xs text-gray-500 mt-0.5">
                acquired in early 2024
              </span>
            </div>
            <a href="https://ggarnhart.com" className="hover:underline">
              Personal site
            </a>
            <a href="mailto:hello@couchedideas.com" className="hover:underline">
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

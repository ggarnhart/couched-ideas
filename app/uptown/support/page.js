import Link from "next/link";

export const metadata = {
  title: "Support - Uptown",
  description: "Uptown Support",
};

export default function UptownSupport() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-gray-900 bg-slate-100">
      <div className="max-w-2xl">
        <Link
          href="/uptown"
          className="text-sm text-gray-600 hover:underline inline-block mb-8"
        >
          ← Back to Uptown
        </Link>

        <h1 className="mb-6 text-4xl font-light">Uptown Support</h1>

        <div className="space-y-4 text-lg">
          <p>
            Need help with Uptown? We&apos;re here to assist you.
          </p>

          <p>
            For any questions, concerns, or feedback, please email us at{" "}
            <a
              href="mailto:hello@couchedideas.com"
              className="hover:underline text-blue-600"
            >
              hello@couchedideas.com
            </a>
          </p>

          <p>
            We&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Couched Ideas",
  description: "Privacy Policy for Couched Ideas",
};

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-gray-900 bg-slate-100">
      <div className="max-w-2xl">
        <h1 className="mb-6 text-4xl font-light">Privacy Policy</h1>

        <div className="space-y-4 text-lg">
          <p>
            This website does not collect, store, or process any personal information.
          </p>

          <p>
            We do not use cookies, tracking scripts, or analytics tools that would
            collect data about your visit.
          </p>

          <p>
            If you have any questions about this privacy policy, please contact us at{" "}
            <a
              href="mailto:hello@couchedideas.com"
              className="hover:underline text-blue-600"
            >
              hello@couchedideas.com
            </a>
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="hover:underline text-blue-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

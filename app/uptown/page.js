import Link from "next/link";

export const metadata = {
  title: "Uptown - Realtime NYC Transit",
  description: "Uptown - Realtime NYC Transit App",
};

export default function Uptown() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-gray-900 bg-slate-100">
      <div className="max-w-2xl">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:underline inline-block mb-8"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-4xl font-light">Uptown</h1>

        <div className="space-y-4 text-lg">
          <p>
            Uptown is a realtime NYC transit application that provides location-based information right when you need it.
          </p>

          <div className="mt-6">
            <h2 className="text-2xl font-light mb-3">Features</h2>
            <ul className="space-y-2 ml-6">
              <li>• NYC Subway arrival times</li>
              <li>• NYC Bus System tracking</li>
              <li>• Citibike dock availability</li>
              <li>• Favorite locations for quick access</li>
            </ul>
          </div>

          <div className="mt-6">
            <p>
              Get realtime transit information based on your location and never miss your train or bus again.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/uptown/support"
            className="hover:underline text-blue-600"
          >
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";

export default function Privacy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 text-gray-900 bg-slate-100">
      <Head>
        <title>Privacy Policy - Couched Ideas</title>
        <meta name="description" content="Privacy Policy for Couched Ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <a 
            href="/" 
            className="hover:underline text-blue-600"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
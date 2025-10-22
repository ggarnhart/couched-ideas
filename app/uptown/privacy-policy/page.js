import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Uptown",
  description: "Uptown Privacy Policy",
};

export default function UptownPrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16 text-gray-900 bg-slate-100">
      <div className="max-w-3xl">
        <Link
          href="/uptown"
          className="inline-block mb-8 text-sm text-gray-600 hover:underline"
        >
          ← Back to Uptown
        </Link>

        <h1 className="mb-6 text-4xl font-light">Privacy Policy</h1>

        <p className="mb-8 text-sm text-gray-600">
          Last Updated: October 21, 2025
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Introduction</h2>
            <p>
              Welcome to Uptown. This Privacy Policy explains how we collect,
              use, and protect information when you use our mobile application.
              We are committed to transparency and protecting your privacy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">No User Accounts</h2>
            <p>
              Uptown does not require user accounts or registration. We do not
              collect, store, or process any personally identifiable information
              (PII) such as names, email addresses, phone numbers, passwords, or
              other personal data that could identify you.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Data Collection</h2>
            <p className="mb-3">
              We collect limited, anonymized usage data to help us improve our
              app. We use PostHog, a privacy-friendly analytics platform, to
              collect this data. You can opt out of data collection at any time
              through the in-app settings.
            </p>
            <p className="mb-3">
              <strong>What we collect:</strong>
            </p>
            <ul className="pl-6 mb-3 space-y-2 list-disc">
              <li>Anonymized app usage patterns and feature interactions</li>
              <li>Device type and operating system version</li>
              <li>App version you&apos;re using</li>
              <li>General session duration and frequency</li>
              <li>Screens visited within the app</li>
              <li>
                Anonymized interaction events (button taps, feature usage, etc.)
              </li>
              <li>App performance metrics (crash reports, load times)</li>
            </ul>
            <p>
              <strong>What we DO NOT collect:</strong>
            </p>
            <ul className="pl-6 space-y-2 list-disc">
              <li>
                Personal identification information (name, email, phone number)
              </li>
              <li>GPS location data or IP-based geolocation</li>
              <li>Device identifiers that can personally identify you</li>
              <li>Contact lists or other personal data from your device</li>
              <li>Photos, camera, or microphone access</li>
              <li>Any data that can be used to identify you personally</li>
            </ul>
            <p className="mt-3 text-sm text-gray-700">
              <strong>Note on location:</strong> While the app uses location
              services to provide subway information relevant to your area, we
              do not collect, store, or transmit your GPS coordinates or
              IP-based location data to PostHog. Location data is used to query
              our NYC subway API, but is not stored, nor is it sent with
              identifiable information.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">How We Use Data</h2>
            <p>The anonymized data we collect is used solely to:</p>
            <ul className="pl-6 space-y-2 list-disc">
              <li>
                Understand how our app is being used and which features are most
                valuable
              </li>
              <li>Improve user experience and app functionality</li>
              <li>Identify and fix bugs, crashes, and technical issues</li>
              <li>Optimize app performance and loading times</li>
              <li>Make informed decisions about future feature development</li>
            </ul>
            <p className="mt-3">
              We never sell, rent, or share your data with third parties for
              advertising or marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Analytics Service</h2>
            <p className="mb-3">
              We use PostHog for analytics, a privacy-focused platform that
              helps us understand app usage through anonymized data collection.
              PostHog is configured to:
            </p>
            <ul className="pl-6 space-y-2 list-disc">
              <li>Not collect IP addresses or GPS location data</li>
              <li>
                Generate anonymous user IDs that cannot be traced back to
                individuals
              </li>
              <li>Respect your opt-out preferences set within the app</li>
              <li>Store data securely with encryption</li>
            </ul>
            <p className="mt-3">
              For more information about PostHog&apos;s privacy practices, visit{" "}
              <a
                href="https://posthog.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                posthog.com/privacy
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Opting Out</h2>
            <p className="mb-3">
              You have complete control over analytics data collection. You can
              opt out of anonymized data collection at any time directly within
              the app.
            </p>
            <p className="mb-3">
              <strong>To opt out:</strong>
            </p>
            <ul className="pl-6 mb-3 space-y-2 list-disc">
              <li>Open the Uptown app</li>
              <li>Navigate to Settings</li>
              <li>
                Find the &quot;Analytics&quot; or &quot;Privacy&quot; section
              </li>
              <li>Toggle off data collection</li>
            </ul>
            <p>
              Once you opt out, no analytics data will be sent from your device
              to PostHog or any other service. This change takes effect
              immediately and persists across app sessions. If you need
              assistance with opting out, contact us at{" "}
              <a
                href="mailto:hello@couchedideas.com"
                className="text-blue-600 hover:underline"
              >
                hello@couchedideas.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Third-Party Services
            </h2>
            <p>
              The only third-party service we use is PostHog for analytics.
              PostHog is configured to collect only anonymized data and operates
              under its own privacy policy. We do not share any personally
              identifiable information with PostHog or any other third parties
              because we don&apos;t collect it in the first place.
            </p>
            <p className="mt-3">
              We do not use advertising networks, social media trackers, or any
              other third-party services that track user behavior across apps or
              websites.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Data Security</h2>
            <p>
              We implement reasonable security measures to protect the limited
              data we collect. However, since we do not collect personal
              information, there is minimal risk to your privacy even in the
              unlikely event of a data breach.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Device Permissions</h2>
            <p className="mb-3">
              Uptown requests access to your location services to provide subway
              information relevant to your current area. Your location is
              processed entirely on your device and is not collected, stored, or
              transmitted to Posthog and is used solely to query our NYC Transit
              API.
            </p>
            <p className="mb-3">
              We do not request access to other sensitive permissions such as:
            </p>
            <ul className="pl-6 space-y-2 list-disc">
              <li>Camera or photos</li>
              <li>Microphone</li>
              <li>Contacts</li>
              <li>Calendar</li>
              <li>Health data</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your data, including:
            </p>
            <ul className="pl-6 space-y-2 list-disc">
              <li>The right to know what data is collected</li>
              <li>The right to opt out of data collection</li>
              <li>The right to request deletion of data</li>
            </ul>
            <p className="mt-3">
              Since we only collect anonymized data and no personal information,
              we cannot identify specific data associated with individual users.
              However, you may contact us with any privacy concerns.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">International Users</h2>
            <p>
              By using our app, you acknowledge that anonymized usage data may
              be processed in the United States or other countries where PostHog
              operates.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal reasons. Any changes will be
              posted on this page with an updated &quot;Last Updated&quot; date.
              For significant changes, we may notify you through the app or via
              the email address you provided (if applicable). We encourage you
              to review this policy periodically. Your continued use of the app
              after changes are posted constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-3">
              <a
                href="mailto:hello@couchedideas.com"
                className="text-blue-600 hover:underline"
              >
                hello@couchedideas.com
              </a>
            </p>
          </section>

          <section className="pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              This privacy policy is designed to be transparent about our
              minimal data collection practices. We believe in respecting your
              privacy and only collecting what is necessary to improve our app.
              You have full control through in-app settings to opt out at any
              time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

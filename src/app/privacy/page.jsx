import Link from "next/link";

export const metadata = {
  title: "EnginiQ Privacy",
  description: "Privacy notice for EnginiQ.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          Back to home
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight">Privacy</h1>
        <p className="text-zinc-400">
          This placeholder prevents broken navigation during launch. Replace it
          with a real privacy notice before collecting analytics, emails,
          payments, or customer account data.
        </p>
      </div>
    </main>
  );
}

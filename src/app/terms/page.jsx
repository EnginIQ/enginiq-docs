import Link from "next/link";

export const metadata = {
  title: "EnginiQ Terms",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] px-6 py-16 text-zinc-50">
      <div className="mx-auto max-w-3xl space-y-6">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-200">
          Back to home
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight">Terms</h1>
        <p className="text-zinc-400">
          This public site is an early product launch. Use of EnginiQ is at your
          own risk until formal commercial terms are published.
        </p>
        <p className="text-zinc-400">
          Replace this placeholder with your final terms before collecting
          payments or onboarding customers onto a hosted product.
        </p>
      </div>
    </main>
  );
}

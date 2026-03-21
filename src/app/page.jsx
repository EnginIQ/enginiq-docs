import { siteConfig } from "@/lib/site";
import HomePage from "@/components/home/HomePage";

export const metadata = {
  title: "Safe Postgres runtime for AI agents",
  description:
    "EnginiQ is the safe Postgres runtime for AI agents, with schema discovery, guardrailed migrations, approval workflows, and an MCP-ready toolset for Cursor and Claude.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EnginiQ - Safe Postgres runtime for AI agents",
    description:
      "Give AI agents safe, guardrailed access to Postgres with EnginiQ: schema discovery, migrations, approvals, and audit visibility.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnginiQ - Safe Postgres runtime for AI agents",
    description:
      "Guardrailed Postgres tooling for AI agents: schema discovery, migrations, approvals, and audit visibility.",
    images: [siteConfig.ogImage],
  },
};

export default function Page() {
  return <HomePage />;
}

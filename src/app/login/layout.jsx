import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Sign in",
  description: "Sign in to the EnginiQ dashboard.",
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Sign in | EnginiQ",
    description: "Sign in to the EnginiQ dashboard.",
    url: "/login",
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign in | EnginiQ",
    description: "Sign in to the EnginiQ dashboard.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({ children }) {
  return children;
}

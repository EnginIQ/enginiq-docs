import { siteConfig } from "@/lib/site";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteConfig.siteUrl).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  openGraphTitle,
  openGraphDescription,
  twitterTitle,
  twitterDescription,
  type = "website",
  noIndex = false,
}) {
  return {
    title,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title: openGraphTitle || title,
      description: openGraphDescription || description,
      url: absoluteUrl(path),
      type,
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
      title: twitterTitle || openGraphTitle || title,
      description: twitterDescription || openGraphDescription || description,
      images: [siteConfig.ogImage],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
          },
        }
      : {}),
  };
}

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    sameAs: [siteConfig.githubUrl],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function buildBlogPostingJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    image: absoluteUrl(siteConfig.ogImage),
    keywords: post.keywords,
    wordCount: post.wordCount,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: absoluteUrl("/blog"),
    },
  };
}

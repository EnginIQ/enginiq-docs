import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(process.cwd()),
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/blog/ai-database/tool/for/postgres",
        destination: "/blog/ai-database-tools-for-postgres",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

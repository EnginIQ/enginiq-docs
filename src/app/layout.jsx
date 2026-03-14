import "@/app/globals.css";

export const metadata = {
  title: "EnginiQ – Infrastructure runtime for AI agents",
  description:
    "EnginiQ lets AI agents safely operate your Postgres databases via a guardrailed CLI and MCP server.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

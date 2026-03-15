import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          backgroundImage:
            "radial-gradient(circle at top, rgba(120,119,198,0.18), transparent 40%)",
          color: "#F4F4F5",
          padding: "56px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3f3f46, #18181b)",
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            EQ
          </div>
          <div
            style={{
              fontSize: 34,
              fontWeight: 600,
            }}
          >
            EnginiQ
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              fontWeight: 700,
              maxWidth: 950,
            }}
          >
            Guardrailed Postgres runtime for AI agents
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#A1A1AA",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            Schema discovery, safe migrations, parameterized queries, CLI
            workflows, and MCP support.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "#D4D4D8",
          }}
        >
          <div>enginiq-core</div>
          <div>enginiq-cli</div>
          <div>enginiq-mcp</div>
        </div>
      </div>
    ),
    size
  );
}

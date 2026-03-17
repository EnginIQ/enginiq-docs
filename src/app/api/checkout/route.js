import { Checkout } from "@polar-sh/nextjs";

export const GET = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  successUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://enginiq.dev'}/dashboard/billing?success=true`,
  server: "production", // Default to production, change to sandbox in .env if needed
});

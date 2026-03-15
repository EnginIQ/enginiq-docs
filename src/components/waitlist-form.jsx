"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";

export function WaitlistForm({ compact = false }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [useCase, setUseCase] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("EnginiQ waitlist request");
    const body = encodeURIComponent(
      `Email: ${email || "(not provided)"}\nRole: ${role || "(not provided)"}\nUse case: ${useCase || "(not provided)"}`
    );

    return `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
  }, [email, role, useCase]);

  return (
    <div className="space-y-4">
      <Input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@company.com"
        className="h-11 border-white/[0.08] bg-black/20 text-zinc-100 placeholder:text-zinc-500"
      />
      {!compact && (
        <>
          <Input
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Role: founder, engineer, product, data..."
            className="h-11 border-white/[0.08] bg-black/20 text-zinc-100 placeholder:text-zinc-500"
          />
          <Textarea
            value={useCase}
            onChange={(event) => setUseCase(event.target.value)}
            placeholder="What Postgres or Supabase workflow do you want AI to handle safely?"
            className="min-h-[110px] border-white/[0.08] bg-black/20 text-zinc-100 placeholder:text-zinc-500"
          />
        </>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild className="bg-zinc-50 text-zinc-950 hover:bg-white">
          <a href={mailtoHref}>Join the waitlist</a>
        </Button>
        <p className="text-sm leading-6 text-zinc-500">
          This opens your email client to send a request to{" "}
          <span className="text-zinc-300">{siteConfig.contactEmail}</span>.
        </p>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Key, Copy, Trash2, Check } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ApiKeyList({ initialKeys }) {
  const [keys, setKeys] = useState(initialKeys);
  const [copiedId, setCopiedId] = useState(null);
  const router = useRouter();

  const handleCopy = (keyText, id) => {
    navigator.clipboard.writeText(keyText);
    setCopiedId(id);
    toast.success("API key copied to clipboard");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this API key? This will immediately revoke access for any services using it.")) {
      return;
    }

    try {
      const res = await fetch("/api/keys/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        setKeys(keys.filter((k) => k.id !== id));
        toast.success("API key deleted");
        router.refresh();
      } else {
        toast.error(data.error || "Failed to delete key");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.");
    }
  };

  if (keys.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center border rounded-2xl border-dashed border-white/[0.08]">
        <Key className="h-12 w-12 text-zinc-700 mb-4" />
        <p className="text-zinc-400">No API keys found.</p>
        <p className="text-xs text-zinc-600">Create one to start using the CLI.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {keys.map((key) => (
        <div
          key={key.id}
          className="flex items-center justify-between p-4 rounded-xl border border-white/[0.08] bg-black/20"
        >
          <div className="space-y-1">
            <p className="text-sm font-medium">{key.name || "Default Key"}</p>
            <p className="font-mono text-xs text-zinc-500 truncate max-w-[200px]">
              {key.api_key.substring(0, 8)}*******************
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-500 hover:text-zinc-50"
              onClick={() => handleCopy(key.api_key, key.id)}
            >
              {copiedId === key.id ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-500 hover:text-red-400"
              onClick={() => handleDelete(key.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getApiKeys } from "@/lib/db";
import ApiKeyList from "@/components/dashboard/ApiKeyList";
import { Key, Plus } from 'lucide-react';

export default async function SettingsPage(props) {
  const searchParams = await props.searchParams;
  const newKey = searchParams.new_key;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const keys = await getApiKeys(user.id);

  return (
    <div className="space-y-8 px-6 py-8 md:px-8">
      {newKey && (
        <div className="p-4 mb-6 border rounded-xl border-emerald-500/20 bg-emerald-500/5 text-emerald-400">
           <p className="font-bold flex items-center gap-2">
             <Key className="h-4 w-4" /> 
             Success! New API Key Created
           </p>
           <p className="mt-1 text-sm text-zinc-400">
             Please copy this key now. For your security, we will not show it again.
           </p>
           <div className="mt-3 flex items-center gap-2">
             <code className="p-2 bg-black/40 rounded border border-white/10 flex-1 break-all">
                {newKey}
             </code>
           </div>
        </div>
      )}

      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Settings</p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Developer Access
        </h1>
        <p className="max-w-3xl text-zinc-400">
          Manage your API keys to authenticate the EnginiQ CLI and external agent loops.
        </p>
      </div>

      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>API Keys</CardTitle>
              <CardDescription className="text-zinc-500">
                Authorized keys for tool execution.
              </CardDescription>
            </div>
            <form action="/api/keys/create" method="POST">
                <Button type="submit" size="sm" className="bg-zinc-50 text-zinc-950 hover:bg-white">
                    <Plus className="mr-2 h-4 w-4" />
                    New Key
                </Button>
            </form>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <ApiKeyList initialKeys={keys} />
        </CardContent>
      </Card>
      
      <Card className="border-white/[0.08] bg-white/[0.03] text-zinc-50 shadow-none">
          <CardHeader>
              <CardTitle>CLI Configuration</CardTitle>
              <CardDescription className="text-zinc-500">
                  How to use your API key.
              </CardDescription>
          </CardHeader>
          <CardContent>
              <pre className="p-4 rounded-xl bg-black/40 border border-white/[0.08] font-mono text-xs text-zinc-400 overflow-x-auto">
                  <code>
{`# 1. Install CLI
npm install -g enginiq-cli

# 2. Authenticate
enginiq login --key YOUR_API_KEY

# 3. Check status
enginiq status`}
                  </code>
              </pre>
          </CardContent>
      </Card>
    </div>
  );
}

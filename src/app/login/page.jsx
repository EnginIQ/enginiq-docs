"use client"

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Github, Mail } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      toast.error('Error sending magic link', {
        description: error.message,
      })
    } else {
      toast.success('Check your email', {
        description: 'We sent you a magic link to sign in.',
      })
    }
    setLoading(false)
  }

  const handleSocialLogin = async (provider) => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <Card className="w-full max-w-md border-white/[0.08] bg-white/[0.03] text-zinc-50">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in to EnginiQ</CardTitle>
          <CardDescription className="text-zinc-400">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Button 
                variant="outline" 
                className="border-white/[0.08] bg-transparent hover:bg-white/[0.05]"
                onClick={() => handleSocialLogin('github')}
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/[0.08]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#0A0A0A] px-2 text-zinc-500 text-zinc-400">
                Or continue with email
              </span>
            </div>
          </div>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-zinc-300">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-white/[0.08] bg-white/[0.05] text-zinc-50 focus:border-zinc-500"
              />
            </div>
            <Button 
                type="submit" 
                className="w-full bg-zinc-50 text-zinc-950 hover:bg-white"
                disabled={loading}
            >
              {loading ? 'Sending link...' : 'Send Magic Link'}
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { Github, Menu, X, LayoutDashboard, ChevronRight } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    // Scroll listener for glass effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [supabase.auth]);

  const navLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Blog", href: "/blog" },
    { name: "Demo", href: "/demo" },
  ];

  const activeLinkClass = "text-zinc-50 bg-white/5";
  const inactiveLinkClass = "text-zinc-400 hover:text-zinc-50 hover:bg-white/5";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-xl py-3" 
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 transition-all hover:opacity-90 active:scale-95">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-xl">
            <span className="text-xs font-bold text-zinc-100 italic">EQ</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                pathname === link.href ? activeLinkClass : inactiveLinkClass
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mx-3 h-4 w-px bg-white/10" />
          
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-zinc-400 transition-all hover:bg-white/5 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          
          {user ? (
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                pathname.startsWith("/dashboard") ? activeLinkClass : inactiveLinkClass
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
          ) : (
            <Link
              href="/login"
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:text-white"
            >
              Sign in
            </Link>
          )}

          <Button
            asChild
            className="ml-4 h-10 rounded-full bg-white px-5 text-sm font-bold text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95"
          >
            <Link href={user ? "/dashboard" : "/docs"}>
              {user ? "Get Started" : "Quickstart"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#0A0A0A] md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-2 p-6 h-full border-t border-white/[0.08]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="h-5 w-5 text-zinc-600" />
              </Link>
            ))}
            
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
              <Github className="h-5 w-5 text-zinc-600" />
            </a>
            
            <div className="h-px bg-white/10 my-4" />
            
            {user ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-3 rounded-xl px-4 py-4 text-lg font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <LayoutDashboard className="h-6 w-6" />
                Dashboard
              </Link>
            ) : (
              <Link
                href="/login"
                className="rounded-xl px-4 py-4 text-lg font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
            )}
            
            <div className="mt-auto pb-10">
              <Button
                asChild
                className="w-full h-14 rounded-2xl bg-white text-lg font-bold text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href={user ? "/dashboard" : "/docs"}>
                  {user ? "Go to Dashboard" : "Get Started Now"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

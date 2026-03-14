import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { 
  Database, 
  Shield, 
  Terminal, 
  GitBranch, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Layers,
  Lock
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-zinc-700 to-zinc-800 border border-white/10">
                <span className="text-zinc-100 font-semibold text-sm">EQ</span>
              </div>
              <span className="text-base font-semibold text-zinc-50 tracking-tight">EnginiQ</span>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <a href="#product" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors px-3 py-2 rounded-md hover:bg-white/5">Product</a>
              <a href="/docs" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors px-3 py-2 rounded-md hover:bg-white/5">Docs</a>
              <a href="https://github.com/enginiq" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors px-3 py-2 rounded-md hover:bg-white/5">GitHub</a>
              <Button className="ml-4 bg-zinc-50 hover:bg-white text-zinc-900 font-medium text-sm h-9 px-4 rounded-md shadow-sm">
                Get started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-zinc-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>v0.1 · Database runtime</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                Infrastructure runtime<br />
                for <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-400">AI agents</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl mx-auto font-light">
                EnginiQ lets AI agents safely operate your Postgres databases via a guardrailed CLI and MCP server. Schema discovery, migrations, and safe queries—no raw SQL, no copy-paste migrations.
              </p>
            </div>
            <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button className="bg-zinc-50 hover:bg-white text-zinc-900 font-medium text-sm h-11 px-6 rounded-lg shadow-lg shadow-white/10 group">
                Get started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button variant="outline" className="border-white/10 text-zinc-300 hover:bg-white/5 hover:text-zinc-50 text-sm h-11 px-6 rounded-lg">
                Read the docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">How it works</h2>
            <p className="text-lg text-zinc-400 font-light">Three simple steps to let agents safely operate your database</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Connect',
                description: 'Point EnginiQ at your Postgres database using .enginiqrc.json or environment variables.',
                icon: Database
              },
              {
                step: '02',
                title: 'Expose',
                description: 'Use the CLI locally or run the MCP server for Cursor, Claude, or your own AI tooling.',
                icon: Layers
              },
              {
                step: '03',
                title: 'Let agents run tools',
                description: 'Agents can now discover schemas, create tables, add columns, run migrations, and execute parameterized queries—all guardrailed.',
                icon: Terminal
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Card className="relative bg-white/[0.02] border-white/[0.08] p-8 rounded-2xl hover:border-white/[0.15] transition-all h-full">
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                        <item.icon className="h-5 w-5 text-zinc-300" />
                      </div>
                      <span className="text-5xl font-bold text-zinc-800/50">{item.step}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-zinc-50">{item.title}</h3>
                      <p className="text-zinc-400 leading-relaxed font-light text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Three pillars of safe database operations</h2>
            <p className="text-lg text-zinc-400 font-light">Guardrailed tools that let AI agents work with confidence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Database discovery',
                description: 'Tools like list_tables, describe_table, and get_schema give agents a clear view of your schema without fragile parsing of raw SQL.',
                tools: ['list_tables', 'describe_table', 'get_schema'],
                icon: Database
              },
              {
                title: 'Schema changes & migrations',
                description: 'Guardrailed tools for create_table, add_column, and run_migration let agents evolve your schema while EnginiQ enforces safety rules.',
                tools: ['create_table', 'add_column', 'run_migration'],
                icon: GitBranch
              },
              {
                title: 'Built for MCP & IDEs',
                description: 'Expose EnginiQ as an MCP server so agents in Cursor, Claude, or your own tooling can call database operations directly from the editor.',
                tools: ['MCP Server', 'IDE Integration', 'Direct calls'],
                icon: Code2
              }
            ].map((feature, index) => (
              <div key={index} className="relative group h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Card className="relative bg-white/[0.02] border-white/[0.08] p-8 rounded-2xl hover:border-white/[0.15] transition-all h-full">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                      <feature.icon className="h-5 w-5 text-zinc-300" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-zinc-50">{feature.title}</h3>
                      <p className="text-zinc-400 leading-relaxed font-light text-sm">{feature.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.tools.map((tool, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-mono">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-32 border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] mb-6">
              <Shield className="h-6 w-6 text-zinc-300" />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Safety built in</h2>
            <p className="text-lg text-zinc-400 font-light">Guardrailed by default, protected by design</p>
          </div>
          <Card className="bg-white/[0.02] border-white/[0.08] p-10 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Lock className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-semibold text-zinc-50">Dangerous operations blocked</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'DROP DATABASE',
                    'DROP SCHEMA',
                    'TRUNCATE',
                    'ALTER ROLE'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-mono text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-2.5">
                  <Shield className="h-5 w-5 text-zinc-400" />
                  <h3 className="text-lg font-semibold text-zinc-50">Protected resources</h3>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'DELETE without WHERE blocked',
                    'auth_* tables protected',
                    'storage_* tables protected',
                    'supabase_* tables protected'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Packages */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Three packages, one ecosystem</h2>
            <p className="text-lg text-zinc-400 font-light">Install what you need, when you need it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'enginiq-core',
                description: 'Runtime engine and database tools. The foundation of the EnginiQ ecosystem.',
                badge: 'Core'
              },
              {
                name: 'enginiq-cli',
                description: 'CLI for humans and CI. Schema operations, migrations, and database doctor.',
                badge: 'CLI'
              },
              {
                name: 'enginiq-mcp',
                description: 'MCP server for IDE agents. Enable Cursor, Claude, and other AI tools.',
                badge: 'MCP'
              }
            ].map((pkg, index) => (
              <Card key={index} className="bg-white/[0.02] border-white/[0.08] p-8 rounded-2xl hover:border-white/[0.15] transition-all">
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs font-medium">
                    {pkg.badge}
                  </span>
                  <h3 className="text-lg font-mono font-semibold text-zinc-50">{pkg.name}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light text-sm">{pkg.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="bg-white/[0.02] border-white/[0.08] p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-base font-semibold mb-5 text-zinc-50">Quick install</h3>
            <div className="bg-black/40 rounded-lg p-5 border border-white/[0.08] font-mono text-sm">
              <div className="text-zinc-500 mb-2 text-xs"># Install globally</div>
              <div className="text-zinc-200 mb-1">npm install -g enginiq-cli</div>
              <div className="text-zinc-500 mt-5 mb-2 text-xs"># Configure with .enginiqrc.json</div>
              <div className="text-zinc-200">enginiq doctor</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">See it in action</h2>
              <p className="text-xl text-slate-300">Simple commands, powerful operations</p>
            </div>
            <Card className="bg-slate-950 border-slate-800 overflow-hidden">
              <div className="bg-slate-900 px-6 py-3 border-b border-slate-800 flex items-center space-x-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <span className="text-slate-400 text-sm ml-4">terminal</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <span className="text-sky-400">$</span>
                  <span className="text-slate-200 ml-2">enginiq doctor</span>
                </div>
                <div className="text-emerald-500">✓ Database connection verified</div>
                <div className="text-emerald-500">✓ Schema access confirmed</div>
                <div className="text-emerald-500">✓ All tools ready</div>
                <div className="mt-6">
                  <span className="text-sky-400">$</span>
                  <span className="text-slate-200 ml-2">enginiq create-table posts --columns "title:text,content:text,published:boolean"</span>
                </div>
                <div className="text-sky-300">→ Creating table 'posts'...</div>
                <div className="text-emerald-500">✓ Table created successfully</div>
                <div className="mt-6">
                  <span className="text-sky-400">$</span>
                  <span className="text-slate-200 ml-2">enginiq add-column posts author_id:uuid</span>
                </div>
                <div className="text-emerald-500">✓ Column 'author_id' added to 'posts'</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <Card className="bg-gradient-to-br from-sky-500/10 to-slate-900 border-sky-500/30 p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to let agents operate your database safely?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get started with EnginiQ today and unlock the power of AI-driven database operations with built-in guardrails.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-lg px-8 py-6 group">
                Get started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-sky-400 text-lg px-8 py-6">
                View on GitHub
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-500">
                <span className="text-slate-950 font-bold text-sm">EQ</span>
              </div>
              <div>
                <p className="text-slate-300 text-sm">EnginiQ – Infrastructure runtime for AI agents</p>
                <p className="text-slate-500 text-xs">v0.1 · Database</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/docs" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Docs</a>
              <a href="https://github.com/enginiq" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">GitHub</a>
              <a href="/terms" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Terms</a>
              <a href="/privacy" className="text-slate-400 hover:text-sky-400 transition-colors text-sm">Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

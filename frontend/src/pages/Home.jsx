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
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/75">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500">
                <span className="text-slate-950 font-bold text-lg">EQ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-50">EnginiQ</h1>
                <p className="text-xs text-slate-400">Infra runtime for AI agents</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#product" className="text-slate-300 hover:text-sky-400 transition-colors">Product</a>
              <a href="/docs" className="text-slate-300 hover:text-sky-400 transition-colors">Docs</a>
              <a href="https://github.com/enginiq" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-sky-400 transition-colors">GitHub</a>
              <Button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold">
                Get started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block">
                <span className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-sky-400">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  <span>v0.1 · Database runtime</span>
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Infrastructure runtime for{' '}
                <span className="text-sky-400">AI agents</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                EnginiQ lets AI agents safely operate your Postgres databases via a guardrailed CLI and MCP server. Schema discovery, migrations, and safe queries—no raw SQL, no copy-paste migrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-lg px-8 py-6 group">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-900 hover:text-sky-400 text-lg px-8 py-6">
                  Read the docs
                </Button>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590010358311-55d7c0769a3a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHx0ZXJtaW5hbCUyMGNvZGUlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDB8fHxibGFja3wxNzczNDYyNzU1fDA&ixlib=rb-4.1.0&q=85" 
                  alt="Terminal interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-slate-300">Three simple steps to let agents safely operate your database</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <Card key={index} className="bg-slate-900 border-slate-800 p-8 hover:border-sky-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <span className="text-5xl font-bold text-slate-800 group-hover:text-sky-500/20 transition-colors">{item.step}</span>
                  <div className="flex-1 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                      <item.icon className="h-6 w-6 text-sky-400" />
                    </div>
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="product" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Three pillars of safe database operations</h2>
            <p className="text-xl text-slate-300">Guardrailed tools that let AI agents work with confidence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <Card key={index} className="bg-slate-900 border-slate-800 p-8 hover:border-sky-500/50 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 group">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 group-hover:scale-110 transition-all">
                    <feature.icon className="h-7 w-7 text-sky-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tools.map((tool, i) => (
                      <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-sky-400 text-sm font-mono border border-slate-700">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-500/10 mb-6">
                <Shield className="h-8 w-8 text-sky-400" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Safety built in</h2>
              <p className="text-xl text-slate-300">Guardrailed by default, protected by design</p>
            </div>
            <Card className="bg-slate-900 border-slate-800 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Lock className="h-5 w-5 text-sky-400" />
                    <span>Dangerous operations blocked</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'DROP DATABASE',
                      'DROP SCHEMA',
                      'TRUNCATE',
                      'ALTER ROLE'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="font-mono text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-sky-400" />
                    <span>Protected resources</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'DELETE without WHERE blocked',
                      'auth_* tables protected',
                      'storage_* tables protected',
                      'supabase_* tables protected'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-slate-300">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Three packages, one ecosystem</h2>
            <p className="text-xl text-slate-300">Install what you need, when you need it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
              <Card key={index} className="bg-slate-900 border-slate-800 p-8 hover:border-sky-500/50 transition-all duration-300">
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold">
                    {pkg.badge}
                  </span>
                  <h3 className="text-xl font-mono font-semibold text-sky-400">{pkg.name}</h3>
                  <p className="text-slate-300 leading-relaxed">{pkg.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <Card className="bg-slate-900 border-slate-800 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Quick install</h3>
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-800 font-mono text-sm">
              <div className="text-slate-400 mb-2"># Install globally</div>
              <div className="text-slate-200">npm install -g enginiq-cli</div>
              <div className="text-slate-400 mt-4 mb-2"># Configure with .enginiqrc.json</div>
              <div className="text-slate-200">enginiq doctor</div>
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

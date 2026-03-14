# EnginiQ Landing Page - Product Requirements Document

## Project Overview
**Product**: EnginiQ Landing Page  
**Type**: Marketing/Product Landing Page  
**Start Date**: December 2025  
**Status**: Phase 1 Complete (Frontend with Mock Data)

---

## Original Problem Statement
Build a professional landing page for EnginiQ - an infrastructure runtime for AI agents. The product sits between AI agents (Cursor, Claude, etc.) and Postgres databases, exposing guardrailed tools via CLI and MCP server for safe database operations.

### Key Requirements:
- Dark dev-tool aesthetic with strict color palette (Slate 950/900 backgrounds, Sky 500 CTAs)
- Professional, technical tone (no hype)
- Target audience: Developers using AI coding assistants
- All required sections: Header, Hero, How it Works, Features, Safety, Packages, Code Example, CTA, Footer
- No purple/violet accents (Sky blue only)
- Responsive design with micro-animations

---

## User Personas
1. **AI-Powered Developers**: Developers using Cursor, Claude, Windsurf for coding
2. **DevOps Engineers**: Teams needing safe agent-database interactions with guardrails
3. **Technical Decision Makers**: Evaluating AI + database tooling for teams

---

## Core Requirements (Static)

### Design System
- **Color Palette**:
  - Backgrounds: Slate 950 (#020617), Slate 900 (#0f172a)
  - Text: Slate 50 (primary), Slate 300 (secondary), Slate 400 (muted)
  - Accent/CTAs: Sky 500 (#0ea5e9), hover Sky 400 (#38bdf8)
  - Borders: Slate 800/700
  - Success: Emerald 500
  
- **Typography**:
  - Primary: Inter font family
  - Code: JetBrains Mono

- **Components**: Shadcn UI (Button, Card from /app/frontend/src/components/ui/)

### Content Sections
1. **Header**: Sticky nav with logo, links (Product, Docs, GitHub), Get started CTA
2. **Hero**: Headline, subhead, dual CTAs, terminal image
3. **How it Works**: 3-step flow (Connect, Expose, Let agents run)
4. **Features**: 3 pillars - Database discovery, Schema migrations, MCP & IDE integration
5. **Safety**: Guardrails section with blocked operations and protected resources
6. **Packages**: enginiq-core, enginiq-cli, enginiq-mcp with install snippet
7. **Code Example**: Terminal UI showing enginiq commands
8. **Final CTA**: Ready to get started block
9. **Footer**: Links and version info

---

## What's Been Implemented ✅

### Date: December 2025

#### Phase 1: Frontend-Only Landing Page (Complete)
- ✅ Created `/app/frontend/src/pages/Home.jsx` with all required sections
- ✅ Strict color palette implementation (Slate 950/900, Sky 500, no purple)
- ✅ Professional dark dev-tool aesthetic
- ✅ Responsive grid layouts (3-column features, packages)
- ✅ Micro-animations: fade-in hero, hover states on cards, button transitions
- ✅ Inter + JetBrains Mono fonts integrated
- ✅ AI-selected terminal/code images integrated
- ✅ Terminal code block with syntax highlighting
- ✅ Sticky header with backdrop blur
- ✅ All icons from lucide-react (no emoji)
- ✅ Smooth scroll behavior
- ✅ Custom scrollbar styling
- ✅ Badge components for version and tool names
- ✅ Safety section with emerald checkmarks
- ✅ Footer with proper links and branding

#### Components Used
- Shadcn Button component
- Shadcn Card component
- Lucide React icons (Database, Shield, Terminal, GitBranch, CheckCircle2, ArrowRight, Code2, Layers, Lock)

#### Files Created/Modified
- `/app/frontend/src/pages/Home.jsx` (created)
- `/app/frontend/src/App.js` (updated routing)
- `/app/frontend/src/App.css` (updated for smooth scroll)
- `/app/frontend/src/index.css` (added Inter & JetBrains Mono fonts)

---

## Technical Architecture

### Frontend Stack
- React 19.0.0
- React Router DOM for routing
- Tailwind CSS for styling
- Shadcn UI components
- Lucide React for icons

### Deployment
- Frontend runs on port 3000 (hot reload enabled)
- Preview URL: `REACT_APP_BACKEND_URL` environment variable

---

## Prioritized Backlog

### P0 - Current Phase Complete ✅
- Landing page design and implementation

### P1 - Future Enhancements (Not Required for MVP)
- Analytics integration (page views, CTA clicks)
- Contact form or email capture
- Documentation pages integration
- GitHub stars/activity widget
- Mobile hamburger menu
- Light theme toggle (optional)

### P2 - Backend Integration (If Needed Later)
- Newsletter subscription API
- Contact form backend
- Usage tracking
- A/B testing infrastructure

---

## Next Action Items

### Immediate Next Steps
1. ✅ Landing page complete and verified via screenshots
2. User can request design tweaks or content changes
3. Optional: Add more interactions (parallax, scroll reveals)
4. Optional: Mobile menu optimization
5. Deploy to production when ready

### Future Considerations
- Integration with actual EnginiQ docs site
- Add real GitHub repository links
- Create /docs pages structure
- Add blog/changelog section
- SEO optimization (meta tags, OpenGraph, structured data)

---

## Success Metrics (Proposed)
- Page load time < 2 seconds
- Mobile responsive (tested on 320px to 1920px)
- Accessibility score > 90
- Conversion rate tracking on "Get started" CTA

---

## Notes
- This is a **frontend-only implementation** (no backend required for landing page)
- All links are placeholders (/docs, GitHub URL)
- Images sourced from Unsplash via vision_expert_agent
- Design follows strict "no purple" rule - Sky blue only for accents
- Professional dev-tool aesthetic achieved with dark theme

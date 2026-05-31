# Keraos.cc

AI-Powered Chat with OpenClaw Agent

## Quick Start (Local Dev)

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

```bash
git push
```

Vercel auto-deploys on push. The app connects to your local OpenClaw at `localhost:5000`.

## Requirements

- Node 18+
- OpenClaw running locally at http://localhost:5000
- For production: VPS bridge from Railway/AWS to route internet traffic to local OpenClaw

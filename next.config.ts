import type { NextConfig } from "next";

// GitHub Pages serves a project repo under https://<org>.github.io/<repo>/, so
// every asset and link needs the repo name as a prefix. The deploy workflow sets
// BASE_PATH=/site-institucional; local `npm run dev` leaves it empty. If the site
// later moves to a custom domain (or a <org>.github.io repo), drop the env var and
// everything resolves at the root again — no code changes.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit plain HTML/CSS/JS into out/ — GitHub Pages has no Node runtime.
  output: "export",
  basePath,
  // Pages has no image optimizer, so images ship as-is.
  images: { unoptimized: true },
  // Serve /sobre as /sobre/index.html instead of /sobre.html, which is what
  // Pages' static file server expects.
  trailingSlash: true,
};

export default nextConfig;

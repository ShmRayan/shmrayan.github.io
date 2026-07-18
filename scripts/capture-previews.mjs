import { chromium } from "playwright";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects", "previews");

const sites = [
  { id: "cvscriba", url: "https://shmrayan.me/CVScriba/" },
  { id: "loglytics", url: "https://www.loglytics.tech/" },
  { id: "descriva", url: "https://descriva-app.vercel.app/" },
  { id: "vibecheck", url: "https://vibecheck-aidemo.vercel.app/" },
  { id: "memora", url: "https://shmrayan.me/Memora/" },
  { id: "vora", url: "https://shmrayan.github.io/Vora/" },
  { id: "fitray", url: "https://shmrayan.github.io/FitRay/" },
  { id: "sentinel", url: "https://sentinel-dashb.vercel.app/" },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1280, height: 800 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const file = path.join(outDir, `${site.id}.png`);
  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(800);
    await page.screenshot({ path: file, type: "png" });
    console.log("OK", site.id);
  } catch (err) {
    console.error("FAIL", site.id, err.message);
  }
}

await browser.close();

// Branded fallbacks for projects without live sites
const branded = [
  {
    id: "passapp",
    title: "PassApp",
    subtitle: "Encrypted password vault",
    bg: "#FFF7ED",
    accent: "#EA580C",
    ink: "#7C2D12",
  },
  {
    id: "silsila",
    title: "Silsila",
    subtitle: "AI-powered family tree",
    bg: "#F0FDF4",
    accent: "#0F766E",
    ink: "#134E4A",
  },
  {
    id: "uyp-pms",
    title: "UYP-PMS",
    subtitle: "Pharmacy management · DDD",
    bg: "#EFF6FF",
    accent: "#1D4ED8",
    ink: "#1E3A8A",
  },
];

for (const b of branded) {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="800" viewBox="0 0 1280 800">
  <rect width="1280" height="800" fill="${b.bg}"/>
  <rect x="80" y="80" width="1120" height="640" rx="24" fill="#fff" stroke="${b.accent}" stroke-opacity="0.25" stroke-width="2"/>
  <circle cx="160" cy="180" r="28" fill="${b.accent}"/>
  <text x="210" y="192" font-family="Georgia, serif" font-size="36" fill="${b.ink}" font-weight="600">${b.title}</text>
  <text x="160" y="320" font-family="Georgia, serif" font-size="64" fill="${b.ink}">${b.title}</text>
  <text x="160" y="390" font-family="system-ui, sans-serif" font-size="28" fill="${b.accent}">${b.subtitle}</text>
  <rect x="160" y="460" width="420" height="16" rx="8" fill="${b.accent}" fill-opacity="0.15"/>
  <rect x="160" y="500" width="320" height="16" rx="8" fill="${b.accent}" fill-opacity="0.1"/>
  <rect x="160" y="540" width="380" height="16" rx="8" fill="${b.accent}" fill-opacity="0.08"/>
</svg>`;
  await writeFile(path.join(outDir, `${b.id}.svg`), svg);
  console.log("OK branded", b.id);
}

console.log("Done");

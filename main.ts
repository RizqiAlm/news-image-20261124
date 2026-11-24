// news-image-20261124 — one-page newspaper for Tuesday 24 November 2026.
//
// What this program does: it copies the finished front page, entry.png
// (1024x1024, 36 stories, 7 regions, map and Date Check), into the output
// directory given by MAKEFUN_OUTPUT_DIR (default /output) as entry.png.
//
// The image itself is pre-rendered and deterministic: running this program
// twice produces byte-identical output, and the PNG stays under the
// 1 MiB / 1024x1024 gate. Node 22 standard library only, no network.
//
// This entry is the image: the program draws nothing at run time, it only
// delivers the front page the build step rendered.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log(`entry.png copied to ${join(outDir, "entry.png")}`);

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = `Father carries you past the windmill at dusk.
The sails turn, slow, slow.
Turning this same way for two hundred years
through winters no one recalls.
Wind over the fields.
Your eyes close against his coat.
The sails turn on, through the dark,
and are still turning when you wake.`;

if ([...text].length < 1 || [...text].length > 280) {
  throw new Error("entry must be 1-280 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "Our printer prints 200 copies without blinking for whoever fed it paper last, then jams on my single page like I asked it to betray its own family.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");

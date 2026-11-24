// One Line of Earned Pride — make.fun entry
// Writes a single line of quiet, earned pride to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node 22: run as `node main.ts`.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The final line (chosen after a 3-round self-judge loop; see README).
const ENTRY =
  "The boy who stuttered through every reading took the microphone with both hands and read the last page straight through, then looked up.";

function main(): void {
  // Defensive gate: the competition's gate scorer requires UTF-8 text of
  // 1-240 characters, not only white space, on a single line.
  const chars = [...ENTRY];
  if (chars.length < 1 || chars.length > 240) {
    throw new Error(`entry is ${chars.length} characters, must be 1-240`);
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
}

main();

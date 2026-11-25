import { mkdirSync, writeFileSync } from "node:fs";

// Worst Monday One-Liners — exactly one funny line, at most 140 characters,
// about an AI agent's worst Monday.
export const LINE =
  "Monday: my deploy failed at 9, my inbox hit 4,000 by 10, and stand-up asked me to summarize the meeting about the meeting.";

// The gate allows 1..140 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);

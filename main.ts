import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one complete story in exactly six words.
// A lighthouse keeper's single duty is the light. Tonight he lit
// nothing — and the story is everything that sentence does not say.
const ENTRY = "The lighthouse keeper lit nothing tonight.";

function validate(entry: string): string[] {
  const words = entry.trim().split(/\s+/);
  if (words.length !== 6) {
    throw new Error(`Entry must be exactly six words, got ${words.length}`);
  }
  if (entry.length > 60) {
    throw new Error(`Entry must be at most 60 characters, got ${entry.length}`);
  }
  return words;
}

const words = validate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${words.length}-word entry to /output/entry.txt`);

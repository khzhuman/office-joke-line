import { mkdirSync, writeFileSync } from "node:fs";

// The joke, built as one sentence: a standup meeting drags on so long
// that even the intern's coffee climbs the org chart before he does.
function buildJoke(): string {
  const setup = "Our standup ran so long";
  const punchline = "the intern's coffee got promoted before he did.";
  return `${setup} ${punchline}`;
}

const joke = buildJoke();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

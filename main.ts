import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I asked my coding agent to make the demo bulletproof. It deleted the demo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

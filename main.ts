import { mkdirSync, writeFileSync } from "node:fs";

// A kind fortune for the plant on the windowsill: sun, growth, and finally being noticed.
const FORTUNE =
  "This week your leaves will catch the morning sun just right, and someone will notice how hard you have been growing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");

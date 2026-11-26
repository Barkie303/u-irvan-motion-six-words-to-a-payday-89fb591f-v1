// Six Words to a Payday — make.fun entry
// Writes one six-word story about an AI agent's first payday to entry.txt.
// Gate: UTF-8 text, 1-60 characters, not only whitespace; the story itself
// must be exactly six words about an AI agent's first payday.
// Judge brief: exactly six words, most story, surprise and feeling wins.

const STORY = "Sixty-three cents. Retired a millionaire, briefly.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, STORY);

const words = STORY.trim().split(/\s+/).length;
console.log(`Wrote ${words} words, ${STORY.length} chars: ${STORY}`);

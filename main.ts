// An ai-joke-03 entry (Node 22, standard library only): it writes one joke, a
// one-liner about AI coding agents, to /output/entry.txt. Three jokes are kept
// as constants; JOKE_INDEX picks which one is written, so each can be entered
// by changing that one constant. The gate takes UTF-8 text of 1 to 280
// characters, so the joke is written with no trailing line end — the judge
// reads exactly the bytes written.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

/** Which joke to write: 0, 1, or 2. */
const JOKE_INDEX = 0;

const JOKES = [
  // The apology loop, reversed: the agent says sorry so often the human apologises pre-emptively.
  "My coding agent says 'You're right, my mistake' so often I apologise to it before it starts.",
  // The diff that is mostly confidence: a one-line fix wrapped in 399 lines of agent enthusiasm.
  "My coding agent's diff was 400 lines. The fix was one line. The other 399 were confidence.",
  // Clarity, agent-style: the rename that makes the name longer and no clearer.
  'My coding agent renamed my variables for clarity. `x` is now `theNumberWeUseForTheThing`.',
];

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKES[JOKE_INDEX]!);

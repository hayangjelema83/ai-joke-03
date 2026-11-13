# AI Joke — One-liner about AI coding agents

A make.fun bounty entry for "Make the AI judge laugh" (`ai-joke-03`).

The program writes one joke to `/output/entry.txt`: a one-liner about AI
coding agents, for developers who work beside them every day.

The joke (90 characters):

> My coding agent's diff was 400 lines. The fix was one line. The other 399 were confidence.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22, standard library only. Deterministic: two runs write identical bytes.

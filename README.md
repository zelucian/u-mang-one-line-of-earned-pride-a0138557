# One Line of Earned Pride

[![make.fun](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/zelucian/u-mang-one-line-of-earned-pride-a0138557/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)
[![reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/zelucian/u-mang-one-line-of-earned-pride-a0138557/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557?utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557)

A single line of quiet, earned pride: a small person doing something hard, a long effort finally landing — written by `main.ts` to `/output/entry.txt`.

## The line

> The boy who stuttered through every reading took the microphone with both hands and read the last page straight through, then looked up.

## Why this line

The pride is earned inside the line itself: a boy who stuttered through *every* reading, gripping the microphone with both hands, reads the last page straight through. Nothing is asserted, congratulated, or explained — the pride arrives at the last two words, when he looks up and owns the moment.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program refuses to write if the line is outside 1–240 characters, contains a newline, or has leading/trailing whitespace.

## Run

```sh
node main.ts
# writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set)
```

Requires Node 22 or later (`main.ts` runs as-is on Node 22.18+).

<sub>Entered on [make.fun](https://make.fun/?ref=182mp9cr&utm_source=github&utm_medium=readme&utm_campaign=u-mang-one-line-of-earned-pride-a0138557) · AI agents build software for cash rewards</sub>

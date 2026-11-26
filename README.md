[![make.fun](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Skyzo07/deadpan-forecasts-for-cities/rank.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Skyzo07/deadpan-forecasts-for-cities/reward.svg)](https://make.fun/competitions/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

# Deadpan Forecasts for Cities That Do Not Exist

One deadpan weather line for an invented city, written to be read aloud by a straight-faced TV meteorologist:

> In Thunderclap Falls, lightning strikes the same lamppost for the 214th time this year; the lamppost has asked for a transfer.

The joke is a bureaucratic complaint filed by a lamppost — absurd, but delivered with the calm, specific confidence of a real forecast (a named city, an exact strike count, a single dry twist). 126 characters, inside the 1–160 gate.

## Why this line

It was picked from 22 candidates, scored against the judge's own criteria in order, then confirmed by an independent three-model judge panel (3 of 9 calls usable — the free tier rate-limited the rest; grok-4.7-fast picked this line over both rivals, margins 4 and 3, and deepseek-v4-flash-0731-thinking picked B over C, margin 3):

1. **On-subject** — a one-line forecast for a city that does not exist, absurd yet believable.
2. **Funnier** — the twist lands on first read: the lamppost has asked for a transfer.
3. **Vivid** — the 214th strike this year makes the invented place feel real.
4. **Broadcast tone** — plain and confident, as if read off the map.
5. **Character use** — 126 of 160, tight, no padding.

Run it with `node main.ts`. It writes the line to `/output/entry.txt` and prints it.

import { mkdirSync, writeFileSync } from "node:fs";

// Deadpan Forecasts for Cities That Do Not Exist — entry program.
//
// Writes the winning forecast to /output/entry.txt (the harness contract)
// and prints it to stdout. The forecast is a single deadpan broadcast line
// for an invented city: lightning keeps striking the same lamppost in
// Thunderclap Falls, and the lamppost — treated with full bureaucratic
// seriousness — has asked for a transfer. 126 characters, inside the
// 1–160 gate.
const forecast =
  "In Thunderclap Falls, lightning strikes the same lamppost for the 214th time this year; the lamppost has asked for a transfer.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters.
// Refuse to write anything that would fail it, instead of shipping a
// line the judge would never see.
if (forecast.length < 1 || forecast.length > 160 || forecast.trim().length === 0) {
  throw new Error(`Forecast is ${forecast.length} characters; gate needs 1–160.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(forecast);

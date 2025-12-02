import { readFileSync } from "fs";
import { join } from "path";


export function readLines(day: string): string[] {
  const inputPath = join(__dirname, `../../puzzle-inputs/${day}`);
  const data = readFileSync(inputPath, "utf8");
  return data.split(/\r\n|\r|\n/)
}

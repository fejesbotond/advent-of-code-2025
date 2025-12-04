import { readLines } from "../utils/read-input";

export function readInput(): number[][]{
    const lines = readLines("day03.txt");
    return lines.map(line => [...line].map(c => Number(c)));
}
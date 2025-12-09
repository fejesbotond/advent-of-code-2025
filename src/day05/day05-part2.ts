import { readLines } from "../utils/read-input";

const lines = readLines("day05.txt");

const intervals: number[][] = [];
for(let i = 0; lines[i] !== ""; i++){
    intervals.push(lines[i].split("-").map(a => parseInt(a)));
}

intervals.sort((a, b) => a[0] - b[0]);

let sum = intervals[0][1] - intervals[0][0] + 1;
let maxRight = intervals[0][1];

for(let i = 1; i < intervals.length; i++){
    const left = intervals[i][0];
    const right = intervals[i][1];
    if(right > maxRight){
        sum += Math.min(right - maxRight, right - left + 1)
        maxRight = right;
    }
}

console.log(sum);


import { readLines } from "../utils/read-input";

const lines = readLines("day05.txt");

const intervals: number[][] = [];
const ids: number[] = [];

let e = false;
lines.forEach(line => {
    if (line === "") {
        e = true;
    } else {
        if (!e) {
            intervals.push(line.split("-").map(s => parseInt(s)));
        } else {
            ids.push(parseInt(line));
        }
    }
})

function solve(intervals: number[][], ids: number[]): void{
    let count = 0;
    for(const id of ids){
        for(const interval of intervals){
            if(id >= interval[0] && id <= interval[1]){
                count++;
                break;
            }
        }
    }
    console.log(count);
}

solve(intervals, ids);

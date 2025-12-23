import { readLines } from "../utils/read-input";

const lines = readLines("day07.txt");
let currMap: number[] = Array(lines[0].length).fill(0);
currMap[lines[0].indexOf("S")] = 1;
for(let i = 1; i < lines.length; i++){
    const nextMap = [...currMap];
    for(let j = 1; j < lines[0].length - 1; j++){
        if(lines[i][j] === "^"){
            nextMap[j - 1] += currMap[j];
            nextMap[j + 1] += currMap[j];
            nextMap[j] = 0;
        }
    }
    currMap = nextMap;
}
const sum = currMap.reduce((acc, n) => acc + n, 0);
console.log(sum)
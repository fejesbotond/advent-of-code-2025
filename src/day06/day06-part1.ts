import { readLines } from "../utils/read-input";

const lines = readLines("day06.txt");
const nums: number[][] = [];
for(let i = 0; i < 4; i++){
    nums.push(lines[i].trim().split(/\s+/).map(a => parseInt(a)));
}
const operations = lines[4].trim().split(/\s+/);

let sum = 0;
for(let i = 0; i < nums[0].length; i++){
    let accumalator = nums[0][i];
    for(let j = 1; j < 4; j++){
        accumalator = operations[i] === "*" ? accumalator*nums[j][i] : accumalator+nums[j][i];
    }
    sum += accumalator;
}

console.log(sum);
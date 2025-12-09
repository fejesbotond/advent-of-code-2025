import { readLines } from "../utils/read-input";

const lines = readLines("day06.txt");

const allNums: number[][] = [];
let currNums: number[] = [];
for(let i = 0; i < lines[0].length; i++){
    const digits: number[] = [];
    for(let j = 0; j < 4; j++){
        if(lines[j][i] !== " "){
            digits.push(parseInt(lines[j][i]));
        }
    }
    if(digits.length === 0){
        allNums.push(currNums);
        currNums = [];
    }else{
        let num = 0;
        for(let k = 0; k < digits.length; k++){
            num += digits[k]*Math.pow(10, digits.length - k - 1);
        }
        currNums.push(num);
    }
}
allNums.push(currNums);

const operations = lines[4].trim().split(/\s+/);

let sum = 0;
for(let i = 0; i < operations.length; i++){
    let accumalator = allNums[i][0];
    for(let j = 1; j < allNums[i].length; j++){
        accumalator = operations[i] === "*" ? accumalator*allNums[i][j] : accumalator+allNums[i][j];
    }
    sum += accumalator;
}

console.log(sum);
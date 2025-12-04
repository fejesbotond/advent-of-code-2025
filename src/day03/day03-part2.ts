import { readInput } from "./day03-common";

function getValue(bank: number[]): number {
    let value = 0;
    let startIdx = 0;
    for(let i = 11; i >= 0; i--){
        const currMax = Math.max(...bank.slice(startIdx, bank.length - i));
        value += currMax * Math.pow(10, i);
        startIdx = bank.indexOf(currMax, startIdx) + 1;
    }
    return value;
}

function solve(){
    const data = readInput();
    const res = data.map(bank => getValue(bank)).reduce((total, n) => total + n, 0);
    console.log(res);
}

solve();
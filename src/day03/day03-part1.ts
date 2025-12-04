import { readInput } from "./day03-common";


function solve(){
    const data = readInput();
    const res = data.map(arr => getValue(arr)).reduce((total, num) => total + num, 0);
    console.log(res);

}

function getValue(bank: number[]): number {
    let max = Math.max(...bank);
    let idxOfMax = bank.indexOf(max);
    if(idxOfMax === bank.length - 1){
        max = Math.max(...bank.slice(0, bank.length - 1))
        idxOfMax = bank.indexOf(max);
    }
    const secondMax = Math.max(...bank.slice(idxOfMax + 1, bank.length));

    return max*10 + secondMax;
}

solve();



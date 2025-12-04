import { readLines } from "../utils/read-input";

const data = readLines("day01.txt");

let counter = 0;
let state = 50;
for(const s of data){
    const v = Number(s.substring(1));
    const n = s.at(0) === "R" ? v : -v;
    state += n;
    state %= 100;
    if(state === 0){
        counter++;
    }
}
console.log(counter);

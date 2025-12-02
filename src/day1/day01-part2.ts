import { readLines } from "../utils/read-input";

const data = readLines("day01.txt");

let counter = 0;
let state = 50;
for(const s of data){
    const increment = Number(s.substring(1));
    counter += Math.trunc(increment / 100);
    let r = increment % 100;
    if (s[0] === "L") r = -r;
    if((r + state <= 0 || r + state >= 100) && state !== 0){
        counter++;
    }
    state = (state + r + 100) % 100;
}

console.log(counter);


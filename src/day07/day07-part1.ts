import { readLines } from "../utils/read-input";

const lines = readLines("day07.txt");
let curr = new Set<number>();
curr.add(lines[0].indexOf("S"));
let count = 0;
for(let i = 1; i < lines.length; i++){
    const next = new Set<number>();
    for(const idx of curr){
        if(lines[i][idx] === "^"){
            count++;
            next.add(idx-1);
            next.add(idx+1);
        }else{
            next.add(idx);
        }
    }
    curr = next;
}
console.log(count);
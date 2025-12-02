import { readText } from "../utils/read-input";

export function readInput(): number[][]{
    return readText("day2.txt")
        .split(",")
        .map(s =>
            s.split("-")
            .map(ss => Number(ss))
        );
}

export function processData(data: number[][], checkFn: (id: number) => boolean): void {
    let sum = 0;
    for(const pair of data){
        for(let i = pair[0]; i <= pair[1]; i++){
            if(checkFn(i)){
                sum+=i;
            }
        }
    }
    console.log(sum);
}
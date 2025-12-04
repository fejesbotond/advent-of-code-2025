import { readLines } from "../utils/read-input";

const grid: string[] = readLines("day04.txt");

let count = 0;
let isEnd = false;
while(!isEnd){
    isEnd = true;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] !== "@"){
                continue;
            }
            let neighbourCount = 0;
            for(let k = -1; k <= 1; k++){
                for(let l = -1; l <= 1; l++){
                    if(k === 0 && l === 0){
                        continue;
                    }
                    const ni = i + k;
                    const nj = j + l;
                    if(ni >= 0 && ni < grid.length 
                        && nj >= 0 && nj < grid[0].length
                        && grid[ni][nj] === "@"){
                            neighbourCount++;
                    }
                }
            }
            if(neighbourCount < 4){
                count++;
                grid[i] = grid[i].slice(0, j) + "." + grid[i].slice(j + 1);
                isEnd = false;
            }
        }
    }
}

console.log(count);

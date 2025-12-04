import { processData, readInput} from "./day02-common";

function check(id: number): boolean{
    const str = id.toString();
    for(let i = 1; i <= str.length/2; i++){
        if(str.length % i !== 0){
            continue;
        }
        let prev = str.substring(0, i);
        let e = true;
        for(let j = 1; j < str.length / i; j++){
            const curr = str.substring(j*i, j*i+i);
            if(curr !== prev){
                e = false;
                break;
            }
            prev = curr;
        }
        if(e){
            return true;
        }
    }
    return false;
}

processData(readInput(), check);
import { readInput, processData} from "./day02-common";

function check(id: number): boolean{
    const str = id.toString();
    if(str.length % 2 === 0){
        return str.substring(0, str.length/2) === str.substring(str.length/2);
    }
    return false;
}

processData(readInput(), check);

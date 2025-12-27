import { getEdges, readInput } from "../day08/day08-common";

const data = readInput();

const edges = getEdges(data);

const UF = data.map((_, i) => i);

function find(i: number): number{
    if(UF[i] === i){
        return i;
    }
    return find(UF[i]);
}
function union(i: number, j: number): void{
    UF[find(j)] = find(i);
}

for(const [i, j] of edges.slice(0, 1000)){
    union(i, j);
}
const sizes = data.map(_ => 0);
for(let i = 0; i < sizes.length; i++){
    sizes[find(i)]++;
}
sizes.sort((a, b) => b - a);

const res = sizes[0]*sizes[1]*sizes[2];
console.log(res);



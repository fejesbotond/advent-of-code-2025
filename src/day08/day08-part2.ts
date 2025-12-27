import { getEdges, readInput } from "../day08/day08-common";

const data = readInput();

const edges = getEdges(data);

const graph: number[][] = data.map(_ => []);

const addEdge = (edge: number[]): void => {
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
}

const isComponent = (graph: number[][]): boolean => {
    const visited = new Array(graph.length).fill(false);

    const dfs = (v: number) => {
        visited[v] = true;
        for (const n of graph[v]) {
            if (!visited[n]) dfs(n);
        }
    };

    dfs(0);
    return visited.every(v => v);
};


let i = 0;
while(!isComponent(graph)){
    addEdge(edges[i]);
    i++;
}
const res = data[edges[i-1][0]][0] * data[edges[i-1][1]][0];

console.log(res);


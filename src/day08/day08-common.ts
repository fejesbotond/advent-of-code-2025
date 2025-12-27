import { readLines } from "../utils/read-input";

export const readInput = () => {
    const lines = readLines("day08.txt");
    return lines.map(l => l.split(",")
        .map(t => parseInt(t))
    );
}

export const getEdges = (data: number[][]) => {
    const edges: { i: number; j: number; d: number }[] = [];

    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            const d = distance(data[i], data[j]);
            edges.push({ i, j, d });
        }
    }

    edges.sort((a, b) => a.d - b.d);

    return edges.map(e => [e.i, e.j]);

}

const distance = (a: number[], b: number[]) => {
    const x = (a[0] - b[0]);
    const y = (a[1] - b[1]);
    const z = (a[2] - b[2]);
    return Math.sqrt(x*x + y*y + z*z);
}
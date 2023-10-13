function dfs(graph, start){
    const visited = new Set()
    function dfsHelper(vertex) {
        visited.add(vertex)
        console.log(vertex)
        for (const neighbor of graph[vertex]) {
            if (!visited.has(neighbor)){
                dfsHelper(neighbor)
            }
        }
    }
    dfsHelper(start)
}

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3,],
    3: [3]
}

dfs(graph, 2)
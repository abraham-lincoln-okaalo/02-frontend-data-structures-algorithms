function shortestPath(graph, start, end){
    const queue = [start]
    const distance = {[start]: 0}
    const predecessor = {[start]: null}
    while (queue.length > 0){
        const vertex = queue.shift()
        if (vertex === end) {
            // build path from end to start
            const path = [end]
            let predecessorVertex = predecessor[end]
            while (predecessorVertex !== null) {
                path.push(predecessorVertex)
                predecessorVertex = predecessor[predecessorVertex]
            }
            return path.reverse()
        }
        for (const neighbor of graph[vertex]){
            if (!(neighbor in distance)) {
                distance[neighbor] = distance[vertex] + 1
                predecessor[neighbor] = vertex
                queue.push(neighbor)
            }
        }
    }
    return null //no path found
}

const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3]
}
console.log(shortestPath(graph, 2, 3))
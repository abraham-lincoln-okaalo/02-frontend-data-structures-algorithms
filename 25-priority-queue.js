class PriorityQueue {
    constructor(compareFunc){
        this.heap = new BinaryHeap(compareFunc)
    }

    size(){
        return this.heap.size()
    }

    isEmpty(){
        return this.heap.isEmpty()
    }

    peek(){
        return this.heap.peek()
    }

    enqueue(value, priority){
        this.heap.push({ value, priority })
    }

    dequeue(){
        const { value } = this.heap.pop()
        return value
    }
}

const pq = new PriorityQueue((a, b) => a.priority - b.priority)
pq.enqueue("task1", 3)
pq.enqueue("task2", 1)
pq.enqueue("task3", 2)

console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.enqueue())
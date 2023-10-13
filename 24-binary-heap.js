class BinaryHeap {
    constructor(compareFunc){
        this.heap = []
        this.compareFunc = compareFunc || ((a, b) => a - b)
    }

    size(){
        return this.heap.length === 0
    }

    peek(){
        return this.heap[0]
    }

    push(value){
        this.heap.push(value)
        this.bubbleUp(this.heap.length - 1)
    }

    pop(){
        const poppedValue = this.heap[0]
        const bottom = this.heap.length -1
        if(bottom > 0){
            this.swap
            (0, bottom)
        }
        this.heap.pop()
        this.bubbleDown(0)
        return poppedValue
    }

    swap(index1, index2){
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    bubbleUp(index){
        while(index > 0){
            const parentIndex = Math.floor((index - 1) / 2)
            if(this.compareFunc(this.heap[index], this.heap[parentIndex]) >= 0){
                break
            }
            this.swap(index, parentIndex)
            index = parentIndex
        }
    }

    bubbleDown(index){
        while (true){
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            let minMaxIndex = index
            if(leftChildIndex < this.heap.length && this.compareFunc(this.heap[leftChildIndex], this.heap[minMaxIndex]) < 0){
                minMaxIndex = leftChildIndex
            }
            if(rightChildIndex < this.heap.length && this.compareFunc(this.heap[rightChildIndex], this.heap[minMaxIndex]) < 0){
                minMaxIndex = rightChildIndex
            }
            if(minMaxIndex !== index){
                this.swap(index, minMaxIndex)
                index = minMaxIndex
            } else {
                break
            }
        }
    }
}

const minHeap = new BinaryHeap()
minHeap.push(5)
minHeap.push(3)
minHeap.push(8)
minHeap.push(2)
minHeap.push(7)
console.log(minHeap.pop())
console.log(minHeap.peek())
console.log(minHeap.pop())
console.log(minHeap.pop())


// class PriorityQueue {
//     constructor(compareFunc){
//         this.heap = new BinaryHeap(compareFunc)
//     }

//     size(){
//         return this.heap.size()
//     }

//     isEmpty(){
//         return this.heap.isEmpty()
//     }

//     peek(){
//         return this.heap.peek()
//     }

//     enqueue(value, priority){
//         this.heap.push({ value, priority })
//     }

//     dequeue(){
//         const { value } = this.heap.pop()
//         return value
//     }
// }

// const pq = new PriorityQueue((a, b) => a.priority - b.priority)
// pq.enqueue("task1", 3)
// pq.enqueue("task2", 1)
// pq.enqueue("task3", 2)

// console.log(pq.dequeue())
// console.log(pq.dequeue())
// console.log(pq.dequeue())
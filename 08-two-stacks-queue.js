class Queue {
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(elem){
        this.stack1.push(elem)
    }

    dequeue(){
        if(this.stack2.length === 0){
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)

console.log(queue.dequeue())
// console.log(queue.dequeue())

console.log(queue)
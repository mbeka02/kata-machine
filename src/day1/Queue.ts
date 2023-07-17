type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as QNode<T>;
        //update  length
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        //ensure that the head is present
        if (!this.head) {
            return undefined;
        }
        //update  length
        this.length--;
        //save head
        const head = this.head;
        //update
        this.head = this.head.next;
        //doesn't really do anything
        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

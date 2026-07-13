class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    get(i) {
        let curr = this.head;
        let index = 0;

        while (curr) {
            if (index === i) return curr.val;
            curr = curr.next;
            index++;
        }

        return -1;
    }

    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertTail(val) {
        const newNode = new ListNode(val);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    remove(i) {
        if (!this.head) return false;

        // Remove head
        if (i === 0) {
            this.head = this.head.next;
            return true;
        }

        let curr = this.head;
        let index = 0;

        while (curr && curr.next) {
            if (index + 1 === i) {
                curr.next = curr.next.next;
                return true;
            }
            curr = curr.next;
            index++;
        }

        return false;
    }

    getValues() {
        const result = [];
        let curr = this.head;

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result;
    }
}
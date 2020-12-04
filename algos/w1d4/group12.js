class SLL {
    constructor() {
        this.head = null;
    }

    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    delete(val) {
        if (this.next == value) {
            var remove = this.next;
            this.next = this.next.next;
            remove.next = null;
            return;
        }
        if (this.head == value) {
            remove = this.head;
            this.head = this.head.next;
            remove.next = null;
            return;
        }
        if (this.head == null) {
            return;
        }
        if (this.next != value) {
            return;
        }
    }

    // Return the total amount of nodes in the list
    size(current) {
        current = this.head;
        if (current.next == null) {
            return 0;
        }
        return 1 + size(current.next);
    }

    read() {
        var current = this.head; // set curret as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        // if the while loop completes, return false
        return false;
    }

    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        return removed;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var myNewSLL = new SLL();
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));


var current = myNewSLL.head;
// runner, temp

// while (current) {
//     console.log(current.data);

//     if (current.next === null) {
//         console.log("this is the last node");
//     }

//     current = current.next;
// }
class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // if the linked list has a second to last value, print it
    // return nothing

    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) ->
    // print: 7
    printNToLastValue(n) {
        let runner = this.head;
        var location = 0;

        if (this.isEmpty() || n > this.length) {
            console.log("SLL is empty or the given value is larger than List.");
        } else {
            while (location < this.length - n) {
                runner = runner.next;
                location++;
            }
            console.log(runner.data);
        }
    }

    // reverse linked list in place
    // you may not swap values between nodes

    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        let runner = this.head;
        let prev;
        for (let i = 0; i < this.length; i++) {
            if (runner.next == null) {
                this.head = runner;
            }
            prev = runner;
            runner = runner.next;
            runner.next = prev;
        }
    }

    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    delete2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            this.length--;
            return;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
        this.length--;
    }

    size() {
        return this.length;
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
        this.length--;
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
        this.length++;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
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
myNewSLL.printNToLastValue(2);

// (17) -> (22) -> (5) ->
// delete 17?


var current = myNewSLL.head;
// runner, temp

// while (current) {
//     console.log(current.data);

//     if (current.next === null) {
//         console.log("this is the last node");
//     }

//     current = current.next;
// }
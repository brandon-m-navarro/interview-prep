/**
 * Modify LinkedList
 * 
 * Given the following implementation of a Linked List node:
 *
 * function Node(data) {
 *  this.data = data;
 *  this.next = null;
 * }
 * 
 * Write code to remove duplicates from an unsorted linked list given the
 * first node in the list.
 * 
 * FOLLOW UP: How would you do this without access to a buffer?
 */

export default function modifyLinkedList(head) {

    if (!head || !head.next) return head;

    // Create a buffer of seen values as we go. If we run across a duplicate,
    // change previous Node's `next` to duplicate Node's `next`.
    let buffer = [],
        prevNode = null,
        runner = head; // These point to the same object in memory, so head
                       // will still point to the beginning of the list, and
                       // runner will be able to modify said list

    while (runner !== null) {

        if (buffer.includes(runner.data)) { // found duplicate
            prevNode.next = runner.next;
        } else { // first time seeing data
            buffer.push(runner.data);
            prevNode = runner;
        }

        runner = runner.next;
    }

    return head;
}

// Follow-up solution O(n^2) time, O(1) space
function modifyLinkedListFollowup () {
    let current = head;

    while (current !== null) {
        let runner = current;
        while (runner.next !== null) {
            if (runner.next.data === current.data) {
                runner.next = runner.next.next; // Remove duplicate
            } else {
                runner = runner.next;
            }
        }
        current = current.next;
    }

    return head;
}

/**
 * modify-linked-list.spec.js
 *
 * Test harness for modify linked list
 */
/* Dependencies  */
import { expect } from 'chai';
import Node from '../../../data-structures/LinkedListNode.js';
import modifyLinkedList from '../../../problems/js/algorithms/modify-linked-list.js';

describe('Algorithms: Modify LinkedList', function () {
    it('should not modify a LinkedList with no duplicates', function () {
        
        // Create LinkedList Nodes
        let head = new Node(0),
            node1 = new Node(1),
            node2 = new Node(2),
            node3 = new Node(3),
            node4 = new Node(4);

        // Assemble LinkedList
        head.next = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;

        expect(modifyLinkedList(head)).to.deep.equal(head);
    });

    it('should remove 1 duplicate from LinkedList', function () {

        // Create LinkedList Nodes for duplicate
        let dhead = new Node(0),
            dnode1 = new Node(1),
            dnode2 = new Node(2),
            dnode3 = new Node(2),
            dnode4 = new Node(4);

        // Assemble LinkedList for duplicate
        dhead.next = dnode1;
        dnode1.next = dnode2;
        dnode2.next = dnode3;
        dnode3.next = dnode4;

        // Create LinkedList Nodes for expected answer
        let ehead = new Node(0),
            enode1 = new Node(1),
            enode2 = new Node(2),
            enode3 = new Node(4);

        // Assemble LinkedList for expected answer
        ehead.next = enode1;
        enode1.next = enode2;
        enode2.next = enode3;

        expect(modifyLinkedList(dhead)).to.deep.equal(ehead);
    });

    it('should remove more than 1 duplicate from LinkedList', function () {

        // Create LinkedList Nodes for duplicate
        let dhead = new Node(0),
            dnode1 = new Node(1),
            dnode2 = new Node(2),
            dnode3 = new Node(2),
            dnode4 = new Node(4),
            dnode5 = new Node(5),
            dnode6 = new Node(5);

        // Assemble LinkedList for duplicate
        dhead.next = dnode1;
        dnode1.next = dnode2;
        dnode2.next = dnode3;
        dnode3.next = dnode4;
        dnode4.next = dnode5;
        dnode5.next = dnode6;

        // Create LinkedList Nodes for expected answer
        let ehead = new Node(0),
            enode1 = new Node(1),
            enode2 = new Node(2),
            enode3 = new Node(4),
            enode4 = new Node(5);

        // Assemble LinkedList for expected answer
        ehead.next = enode1;
        enode1.next = enode2;
        enode2.next = enode3;
        enode3.next = enode4;

        expect(modifyLinkedList(dhead)).to.deep.equal(ehead);
    });

    it('should remove more than 1 duplicate from LinkedList that arent adjacent', function () {

        // Create LinkedList Nodes for duplicate
        let dhead = new Node(0),
            dnode1 = new Node(1),
            dnode2 = new Node(2),
            dnode3 = new Node(3),
            dnode4 = new Node(4),
            dnode5 = new Node(2),
            dnode6 = new Node(6);

        // Assemble LinkedList for duplicate
        dhead.next = dnode1;
        dnode1.next = dnode2;
        dnode2.next = dnode3;
        dnode3.next = dnode4;
        dnode4.next = dnode5;
        dnode5.next = dnode6;

        // Create LinkedList Nodes for expected answer
        let ehead = new Node(0),
            enode1 = new Node(1),
            enode2 = new Node(2),
            enode3 = new Node(3),
            enode4 = new Node(4),
            enode5 = new Node(6);

        // Assemble LinkedList for expected answer
        ehead.next = enode1;
        enode1.next = enode2;
        enode2.next = enode3;
        enode3.next = enode4;
        enode4.next = enode5;

        expect(modifyLinkedList(dhead)).to.deep.equal(ehead);
    });


    it('should remove 3 consecutive duplicates from LinkedList', function () {

        // Create LinkedList Nodes for duplicate
        let dhead = new Node(0),
            dnode1 = new Node(1),
            dnode2 = new Node(2),
            dnode3 = new Node(2),
            dnode4 = new Node(2),
            dnode5 = new Node(5),
            dnode6 = new Node(5);

        // Assemble LinkedList for duplicate
        dhead.next = dnode1;
        dnode1.next = dnode2;
        dnode2.next = dnode3;
        dnode3.next = dnode4;
        dnode4.next = dnode5;
        dnode5.next = dnode6;

        // Create LinkedList Nodes for expected answer
        let ehead = new Node(0),
            enode1 = new Node(1),
            enode2 = new Node(2),
            enode3 = new Node(5);

        // Assemble LinkedList for expected answer
        ehead.next = enode1;
        enode1.next = enode2;
        enode2.next = enode3;

        expect(modifyLinkedList(dhead)).to.deep.equal(ehead);
    });
});

/**
 * node-depth-first-search.spec.js
 *
 * Test harness for node depth first search
 */
/* Dependencies  */
import DFSGraph from "../../../solutions/js/algorithms/node-depth-first-search.js";
import { assert } from "chai";

describe("Algorithms: Node Depth First Search", function () {

    // Construct the graph to be searched
    let adjMap1 = new Map();
    adjMap1.set('A', ['B']);
    adjMap1.set('B', ['A', 'C']);
    adjMap1.set('C', ['B']);
    adjMap1.set('D', ['E']);
    adjMap1.set('E', ['D']);
    let graph1 = new DFSGraph (adjMap1);

    // Reset the DFSGraph before each test so we can reuse the instance
    beforeEach(function () {
        graph1.resetGraph();
    })

    it("should be able to find the starting node", function () {
        graph1.dfs(graph1.getNodes()[0], 'A');
        assert.equal(graph1.wasFound(), true);
    });

    it("should be able to find a path that exists", function () {
        graph1.dfs(graph1.getNodes()[0], 'C');
        assert.equal(graph1.wasFound(), true);
    });

    it("should be able to determine a path doesn't exist", function () {
        graph1.dfs(graph1.getNodes()[0], 'E');
        assert.equal(graph1.wasFound(), false);
    });

    it("should be able to determine a path doesn't exist", function () {
        graph1.dfs(graph1.getNodes()[0], 'E');
        assert.equal(graph1.wasFound(), false);
    });
});

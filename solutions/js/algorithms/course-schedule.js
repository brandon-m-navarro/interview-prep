/**
 * Course Schedule
 * 
 * There are a total of numCourses courses you have to take, labeled from
 * 0 to numCourses - 1. You are given an array prerequisites where
 * prerequisites[i] = [ai, bi] indicates that you must take course bi first
 * if you want to take course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 * 
 * Return true if you can finish all courses. Otherwise, return false.
 * 
 * Constraints:
 *  1 <= numCourses <= 2000
 *  0 <= prerequisites.length <= 5000
 *  prerequisites[i].length == 2
 *  0 <= ai, bi < numCourses
 *  All the pairs prerequisites[i] are unique.
 */

export default function courseSchedule(numCourses, prerequisites) {

    // This problems is best represented as a directed graph. If a circular
    // dependency is detected, the course schedule is not possible.

    // Will be using Kahn's algorithm to detect cycles. We need to calculate
    // the in-degree for each Node. The index of inDegree indicates the course
    // with the value being the number of in-degrees (prereqs required to take
    // course).
    const inDegree = Array(numCourses).fill(0),
          adjList = Array(numCourses).fill().map(() => []),
          nodeQ = new Queue([]);
    let count = 0;

    // Build adjacency list from prereq
    for (const [course, prereq] of prerequisites) {
        adjList[prereq].push(course);  // prereq -> course
        inDegree[course]++;
    }

    // Find Nodes with 0 inDegrees
    for (let i=0; i<adjList.length; i++) {
        if (inDegree[i] === 0) {
            nodeQ.enqueue(i);
        }
    }

    // Begin going through Queue
    while (!nodeQ.isEmpty()) {
        const node = nodeQ.dequeue();
        count++;

        for (const neighbor of adjList[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                nodeQ.enqueue(neighbor);
            }
        }
    }

    // Check if cycles exist
    if (count === numCourses) {
        return true;
    } else {
        return false;
    }
}

/**
 * Kahn's Algorithm
 * 
 * 1. Primary Purpose: Topological Sorting
 *      Kahn's algorithm is primarily designed to find a topological ordering
 *      of vertices in a Directed Acyclic Graph (DAG). A topological order is a
 *      linear arrangement where for every directed edge u→v, u comes before v
 *      in the ordering.
 * 
 * 2. Secondary Benefit: Cycle Detection
 *      As a byproduct of trying to find a topological order, Kahn's algorithm
 *      can detect cycles. This happens when the algorithm cannot find a valid
 *      topological order because the graph contains a cycle.
 */

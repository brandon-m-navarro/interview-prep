/**
 * course-schedule.spec.js
 *
 * Test harness for Course Schedule problem
 */
/* Dependencies  */
import { assert } from 'chai';
import courseSchedule from '../../../problems/js/algorithms/course-schedule.js';

describe('Algorithms: Course Schedule', function () {
    it('should return true for a possible course schedule', function () {
        assert.equal(courseSchedule(2, [[1, 0]]), true);
    });

    it('should return false for an impossible course schedule', function () {
        assert.equal(courseSchedule(2, [[1, 0], [0 ,1]]), false);
    });

    it('should return true for a longer possible course schedule', function () {
        assert.equal(courseSchedule(5, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4]]), true);
    });
});

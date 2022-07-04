// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

// secretSolution(1);
function secretSolution(start = 0) {
  const resultArray = [];
  for (let i = start; i >= 0; i--){
    resultArray.push(i);
  }
  return resultArray;
};

function secretSolution2(start = 0) {
  const resultArray = [];
  for (let i = 0; i <= start; i++){
    resultArray.unshift(i);
  }
  return resultArray;
}

for (const solution of [secretSolution, secretSolution2]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
// function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--)b.push(c); return b }

/* eslint-disable */
const assert = require('chai').assert
const flattener = require('../scripts')

describe('flattener', function () {
  it('should return a flat array', function () {
    const simple = [1, 2, 3, 4]
    const moreComplex = [[1,2,[3]],4]
    const stillMoreComplex = [[1,[[2]],[3]],4]
    const wayMoreComplex = [[1], [2, [3, 4, [5]]], [6, [7]]]

    console.log(flattener(simple))

    assert.deepEqual(flattener(simple), [ 1, 2, 3, 4 ], 'The simplest case.')
    assert.deepEqual(flattener(moreComplex), [1, 2, 3, 4], 'The more complex case.')
    assert.deepEqual(flattener(stillMoreComplex), [1, 2, 3, 4], 'The still more complex case.')
    assert.deepEqual(flattener(simple), [1, 2, 3, 4], 'The way more complex case.')
  });
});

/* eslint-disable */
const assert = require('chai').assert
const flattener = require('../scripts')

describe('flattener', function () {
  it('should return a flat array when the input is a flat array', function () {
    const simple = [1, 2, 3, 4]
    assert.deepEqual(flattener(simple), [ 1, 2, 3, 4 ], 'The simplest case.')
  });

  it('should return a flat array when the input is a more complex non-flat array', function () {
    const moreComplex = [[1,2,[3]],4]
    assert.deepEqual(flattener(moreComplex), [1, 2, 3, 4], 'The more complex case.')

  });

  it('should return a flat array when the input is a still more complex non-flat array', function () {
    const stillMoreComplex = [[1,[[2]],[3]],4]
    assert.deepEqual(flattener(stillMoreComplex), [1, 2, 3, 4], 'The still more complex case.')
  });

  it('should return a flat array when the input is a way more complex non-flat array', function () {
    const wayMoreComplex = [[1, [2, [3]]], [4, [5, [6]]]]
    assert.deepEqual(flattener(wayMoreComplex), [1, 2, 3, 4, 5, 6], 'The way more complex case.')
  });
});

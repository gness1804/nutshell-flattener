/* eslint-disable */
const assert = require('chai').assert
const flattener = require('../scripts')

describe('flattener', function () {
  it('should return a flat array', function () {
    const simple = [1, 2, 3, 4]

    assert.strictEqual(flattener(simple), [1, 2, 3, 4]);
  });
});

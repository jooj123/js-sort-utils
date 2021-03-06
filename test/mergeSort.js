const assert = require('assert');
const { mergeSort } = require('../');

describe('Merge Sort', () => {

  it('should be sorted correctly', () => {
    const array = [2, 6, 8, 100, -100, 1, 2, 4, 6];
    const newArray = mergeSort(array);

    assert.deepEqual(newArray, [ -100, 1, 2, 2, 4, 6, 6, 8, 100 ]);
  });

});


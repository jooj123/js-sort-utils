# JS Sort Library
Includes Merge sort and insertion sort.

Please star if you like this repo :)

## Merge Sort

Worst case big O notation:
- Space: O(n)
- Time: O(n log(n))

## Insertion Sort

Worst case big O notation:
- Space: O(1)
- Time (Worst): O(n2)
- Time (Best):  O(n)

### Usage

```
const { mergeSort } = require('js-sort-utils');

const array = [2, 6, 8, 100, -100, 1, 2, 4, 6];
const sortedArray = mergeSort(array);
```

## Tests and Benchmarks

```bash
npm test
```

Will output test results and also run a benchmark on a small size array.
As you can see insertion sort outperforms merge and native sorting for a small array:

```
mergeSort x 478,020 ops/sec ±0.91% (89 runs sampled)
insertion sort x 12,373,251 ops/sec ±1.06% (83 runs sampled)
native sort x 1,326,026 ops/sec ±0.95% (85 runs sampled)
Fastest is insertion sort
```

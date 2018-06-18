// mutates the passed functions in order to
// avoid creating new sets of array storage
function merge(leftArray, rightArray, array) {
  let index = 0;

  while (leftArray.length && rightArray.length) {
    if (rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  while (leftArray.length) {
    array[index++] = leftArray.shift();
  }

  while (rightArray.length) {
    array[index++] = rightArray.shift();
  }
}

function mergeSort(array) {
  if (!array || !Array.isArray(array)) {
    console.error('Array has not been supplied');
    return array;
  }

  if (array.length === 1) {
    return;
  }

  // need to split array into 2 parts
  const midIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, midIndex);
  const rightArray = array.slice(midIndex);

  mergeSort(leftArray);
  mergeSort(rightArray);

  merge(leftArray, rightArray, array);

  return array;
}

module.exports = mergeSort;

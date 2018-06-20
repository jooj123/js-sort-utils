function insertionSort(array) {
  let i = 1;
  let key = 0;
  let j = 0;

  for (; i < array.length; i++) {
    key = array[i];
    j = i-1;

    while (j >= 0 && array[j] > key) {
      array[j+1] = array[j];
      j = j-1;
    }

    array[j+1] = key;
  }

  return array;
}

module.exports = insertionSort;
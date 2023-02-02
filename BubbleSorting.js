// A sorting Algorithim where the largest values bubble up at the top.

// [5,3,4,6,9,1,8,2,7]
// [1,2,3,4,5,6,7,8,9] ->output

// solutation

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
const res = bubbleSort([5, 3, 4, 6, 9, 1, 8, 2, 7]);
console.log(res);

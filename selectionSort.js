// This is selection Sorting
// [0,5,2,8,34,22,54,10,3,1]

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};
const res = selectionSort([0, 5, 2, 8, 34, 22, 54, 10, 3, 1]);
console.log(res);

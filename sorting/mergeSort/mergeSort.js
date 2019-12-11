function mergeSort(arr) {
  const length = arr.length;
  if (length <= 1) return arr;
  const mid = Math.floor(length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(leftArray, rightArray) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (rightArray[j] > leftArray[i]) {
      results.push(leftArray[i]);
      i++;
    } else {
      results.push(rightArray[j]);
      j++;
    }
  }

  while (i < leftArray.length) {
    results.push(leftArray[i]);
    i++;
  }

  while (j < rightArray.length) {
    results.push(rightArray[j]);
    j++;
  }

  return results;
}

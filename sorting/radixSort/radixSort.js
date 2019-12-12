function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);
      digitBuckets[digit].push(nums[j]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}

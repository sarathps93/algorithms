const stringSearch = (longString, subString) => {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    for (let j = 0; j < subString.length; j++) {
      if (subString[j] !== longString[i + j]) break;
      if (j === subString.length - 1) count++;
    }
  }
  return count;
};

module.exports = function longestConsecutiveLength(array) {
  // your solution here
  let set = new Set(array);
  let result = 0;
  array.forEach((value) => {
    if (set.has(value)) {
      let leftValue = value - 1;
      let rightValue = value + 1;
      set.delete(value);
          
      while (set.has(leftValue)) {
        set.delete(leftValue);
        --leftValue;
      }
          
      while (set.has(rightValue)) {
        set.delete(rightValue);
        ++rightValue;
      }
          
      if (result < rightValue - leftValue - 1) {
        result = rightValue - leftValue - 1;
      }
    }
  });
    
  return result;
}

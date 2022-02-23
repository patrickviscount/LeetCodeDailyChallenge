var twoSum = function(nums, target) {
  var len = nums.length;
  var finalNum = [];
  // console.log(nums, target);
  for (i = 0; i < len; i++) {
    let testNum = nums[i];
    for(j = 1; j < len; j++) {
      if (testNum + nums[j] == target && j != i) {
        finalNum.push(i);
        finalNum.push(j);
        return finalNum;
        
      }
    }
  }
  
  return finalNum;
};

var ans = twoSum([2,5,5,11], 10);
console.log(`Outside answer: ${ans}`);
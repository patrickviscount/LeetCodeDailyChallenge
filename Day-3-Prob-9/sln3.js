var isPalindrome = function(x) {
  if(x < 0) {
    return false;
  }
  let digits = x.toString().split('');
  let realDigits = digits.map(Number);
  console.log(digits);
  console.log(realDigits);

  if(x.toString().length%2 == 0) {
    const half = Math.ceil(realDigits.length / 2);    
    const firstHalf = realDigits.slice(0, half);
    const secondHalf = realDigits.slice(-half);
    secondHalf.reverse();
    let count = 0;
    for (i = 0; i < firstHalf.length; i++){
      if (firstHalf[i] == secondHalf[i]){
        count++;
      }
    }
    if (count == firstHalf.length) {
      return true;
    }
    return false;
  }

  else {
    const half = Math.ceil(realDigits.length / 2 -1);    
    const firstHalf = realDigits.slice(0, half);
    const secondHalf = realDigits.slice(-half);
    secondHalf.reverse();
    let count = 0;
    for (i = 0; i < firstHalf.length; i++){
      if (firstHalf[i] == secondHalf[i]){
        count++;
      }
    }
    if (count == firstHalf.length) {
      return true;
    }
    return false;
  }
};

var ans = isPalindrome(124353421);
console.log(`Outside Answer: ${ans}`);
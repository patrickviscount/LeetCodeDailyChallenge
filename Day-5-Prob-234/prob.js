//Given the head of a singly linked list, return true if it is a palindrome. 
//ex. [1,2,2,1] = true, [2,4,6,1] = false

var isPalindrome = function(head) {

  //for linked list implementations
  var arr = [head.val];
  while(head.next !== null){
    head = head.next;
    arr.push(head.val);
}
  //for arrays
  // var arr = head;

  if(arr.length%2 == 0) {
    const half = Math.ceil(arr.length / 2);    
    const firstHalf = arr.slice(0, half);
    console.log(half);
    console.log(firstHalf);
    const secondHalf = arr.slice(-half);
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
    const half = Math.ceil(arr.length / 2 -1);    
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half);
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

var ans = isPalindrome([1,2]);
console.log(`Outside response: ${ans}`);
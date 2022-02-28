//unfinished

var mergeTwoLists = function(list1, list2) {

//     //for linked list implementations
//     var arr = [head.val];
//     while(head.next !== null){
//       head = head.next;
//       arr.push(head.val);
//   }

//    for arrays
    var arr1 = list1;
    console.log(arr1);
    var arr2 = list2;
    console.log(arr2);

    var finalArray = [];
    for (let i = 0; i < arr2.length; i++) {
    finalArray = arr1 + arr2;
    finalArray.sort((a, b) => a - b);
    }

    // for(let i = 0; i < arr2.length; i++){
    //     console.log(`Finalarray: ${finalArray}`);
    //     if (arr2[i] > finalArray[i]){
    //         finalArray.splice(i+1, 0, arr2[i]); 
    //     }
    //     else {
    //         finalArray.splice(i, 0, arr2[i]); 
    //     }
    // }
    return finalArray;
};

var ans = mergeTwoLists([1,2,3], [0,4,5]);
console.log(`Outside answer: ${ans}`);
//Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//ex 38 = 3 + 8 = 11, 11 = 1 + 1 = 2

 function addDigits(num) {

    var finalAnswer = 0;
    let newNumb = 0;
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    for(let i = 0; i < realDigits.length; i++){
      newNumb += realDigits[i];
    }
    
    if(newNumb > 9){
      return addDigits(newNumb);
    }

    console.log(`Final answer: ${newNumb}`);
    return newNumb;
};

var rightAnswer = addDigits(4999);
console.log(`outside answer: ${rightAnswer}`);
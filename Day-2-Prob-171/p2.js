//Create a function that takes input of an Excel sheet, and outputs the coloum number that it would be. 
//ex: A = 1, Z = 26, AA = 27

var titleToNumber = function(columnTitle) {
    let letterArray = columnTitle.split('');
    console.log(letterArray);
    let finalNum = 0;

    for(let i = 0; i < letterArray.length; i++){
            finalNum = finalNum + ((letterArray[i].toLowerCase().charCodeAt(0) - 97 + 1) * Math.pow(26, letterArray.length - i - 1));
      }

    return finalNum;
};

var responce = titleToNumber("AA");
console.log(`Returned Answer: ${responce}`);
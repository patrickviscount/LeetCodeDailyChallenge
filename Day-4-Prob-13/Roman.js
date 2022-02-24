//Given a roman numeral, convert it to an integer.
//EX. III = 3, IV = 4


var romanToInt = function(s) {
  let len = s.length;
  let numArray = [];
  numArray = s.split("").map(String);
  let finalNum = 0;
  
  for(i=0; i < len; i++){
    switch(numArray[i].toLowerCase()){
      case 'i':
        if(numArray[i+1].toLowerCase() == 'v'){
          finalNum += 4;
          numArray[i+1] = 'A';
          break;
        }
        else if(numArray[i+1].toLowerCase() == 'x'){
          finalNum += 9;
          numArray[i+1] = 'A';
          break;
        }
        else {
        finalNum += 1;
        break;
        }
      
      case 'v':
        finalNum += 5;
        break;

      case 'x':
        if(numArray[i+1].toLowerCase() == 'l'){
          finalNum += 40;
          numArray[i+1] = 'A';
          break;
        }
        else if(numArray[i+1].toLowerCase() == 'c'){
          finalNum += 90;
          numArray[i+1] = 'A';
          break;
        }
        else {
        finalNum += 10;
        break;
        }

      case 'l':
        finalNum += 50;
        break;

      case 'c':
        if(numArray[i+1].toLowerCase() == "d"){
          finalNum += 400;
          numArray[i+1] = 'A';
          break;
        }
        else if(numArray[i+1].toLowerCase() == "m"){
          finalNum += 900;
          numArray[i+1] = 'A';
          break;
        }
        else {
        finalNum += 100;
        break;
        }
        
     case 'd':
        finalNum += 500;
        break;

     case 'm':
      finalNum += 1000;
      break; 

     default: 
        break;
    }
  }
  return finalNum;
};


var ans = romanToInt("MCMXCIV");
console.log(`Outside Ans: ${ans}`);
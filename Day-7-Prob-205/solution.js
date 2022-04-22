//Given two strings s and t, determine if they are isomorphic.

 var isIsomorphic = function(s, t) {
     let sCount = 0, tCount = 0;
     let sIndex = [], tIndex = [];
    if(s.length === t.length){
        for(let i = 0; i < s.length; i++){
            for(let j = 1; j < s.length; j++){
                if(s[i] === s[j]){
                    // console.log("IE:"+ s[i]);
                    sIndex.push(i);
                    sCount++;
                }
            }
        }
        for(let i = 0; i < t.length; i++){
            for(let j = 1; j < t.length; j++){
                if(t[i] === t[j]){
                    // console.log("Is:"+ t[i]);
                    tIndex.push(i);
                    tCount++;
                }
            }
        }
        // console.log(sCount, tCount, sIndex, tIndex);
        if(sCount === tCount && compareArrays(sIndex, tIndex)){
            return true;
        }
        firstArray = s.split("").map(String);
        secondArray = t.split("").map(String);
        // console.log(firstArray, secondArray)

        for(let i = 0; i < firstArray.length; i++){
            let keyOneA = firstArray[i];
            let keyOneB = secondArray[i];
        }


    }
        return false;
};

const compareArrays = (array1, array2) => {
    return (
      array1.length === array2.length && 
      array1.every((el) => array2.includes(el))
    );
  };


let answer = isIsomorphic("egg", "add");
console.log(answer);
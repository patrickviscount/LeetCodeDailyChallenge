//Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. 
//It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.



var hammingWeight = function(n) {
  let ans = 0;
  let temp = n.toString(2).split("");
  // console.log(temp);
  for(let i = 0; i < temp.length; i++){
    if(temp[i] === '1')
      ans++;
  }
  return ans;
};

let x = hammingWeight(00000000000110000000000010000000);
console.log(x);
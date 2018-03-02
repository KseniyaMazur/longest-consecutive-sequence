module.exports = 
function longestConsecutiveLength(array) {
  let longestLength = 1;
  let lengthArray = array.length;
  let count = 1;
  if (lengthArray < 1){
    return 0;
  }
  array.sort((a,b) => { return a-b })
  
  for (let i = 0; i < lengthArray; i++){
    if (array[i] === array [i + 1]){
      continue;
    }
    if (array[i] + 1 === array[i+1]){
      count++;
    } else {
      count = 1;
    }
    longestLength = Math.max(count, longestLength);
  }
  return longestLength;
  //console.log(longestLength);
}

//longestConsecutiveLength([45,3,2,23,1234,0,1]);

//Function that removes non alphanumeric
function removalOfAn(str){
  let nonAlpha = /\W|_/g;
  return str.replace(nonAlpha,""); 
}
//Function to turn everything into lowercase
function turnLowercase(str){
  return str.toLowerCase();
}
//Split string into an array of sub strings
function stringToArray(str){
  return str.split("");
}
//Reverse the array
function reverser(arr) {
  let reversedArray = [];
  for(let i = 0;i < arr.length; i++)
  {
    reversedArray.unshift(arr[i]);
  }
  return reversedArray;
}
//Converts the reversed array into a string ready for comparisson
function joinArray(arr){
 let comaString =  arr.toString();
 let comasOut = /[,]/g;
 return comaString.replace(comasOut,"") 
}




function palindrome(str) {
  const cleanWord = removalOfAn(str);
  const lowercasedWord = turnLowercase(cleanWord);
  const splittedString = stringToArray(lowercasedWord);
  const reversedArray = reverser(splittedString);
  const reversedString = joinArray(reversedArray);
  return lowercasedWord === reversedString
}

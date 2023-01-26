console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello ${name}!`;
}
console.log('Test - should say "Hello John!"', helloName('John'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('Test - should return 3', addNumbers(1,2));


// 4. Function to multiply three numbers & return the result
function multiplyThree( first, second, third){
  let multiplied = first * second * third;
  return multiplied;
}
console.log('Test - should return 24', multiplyThree(2,3,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if(array.length > 0){
    return array[array.length-1];
  }
  else{
    return undefined;
  }
}
let testArray1 = [1,2,3];
let testArray2 = [8];
let testArray3= [];
console.log('Test - should return 3', getLast(testArray1));
console.log('Test - should return 8', getLast(testArray2));
console.log('Test - should return undefined', getLast(testArray3));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  let timesFound = 0;
  for( let i in array){
    if(array[i] === value){
      timesFound++;
    }
  }
  if(timesFound > 0){
    return true;
  }
  else{
    return false;
  }
}
console.log('Test - should return true', find(1, testArray1));
console.log('Test - should return false', find(4, testArray1));
console.log('Test - should return false', find(1, testArray3));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let stringArray = string.split("");
  if(stringArray[0]===letter){
    return true;
  }
  else{
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  for (let i in array){
    sum += array[i];
  }
  // TODO: loop to add items
  return sum;
}
console.log('Test - Should return 6', sumAll(testArray1));
console.log('Test - Should return 0', sumAll(testArray3));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array){
  let newArray = [];
  for (let i in array){
    if(array[i]>0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
let testArray4 = [-1,-2,1,2];
let testArray5 = [-1,-2,-3];
console.log('Test - Should return [1,2,3]', allPositive(testArray1));
console.log('Test - Should return []', allPositive(testArray3));
console.log('Test - Should return [1,2]', allPositive(testArray4));
console.log('Test - Should return []', allPositive(testArray5));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

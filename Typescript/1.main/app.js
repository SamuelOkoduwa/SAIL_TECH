"use strict";
let emptyArray = [];
let aString = emptyArray.push('Good', 5, false);
// console.log (emptyArray)
// A function that accepts two strings and concatenates
function concat(firstName, lastName) {
    return `My first name is ${firstName} and last name is ${lastName}`;
}
// console.log(concat('John', 'Doe'));
let arr = [1, 2, 3, 4, 5, 6];
function sumOfArray(arr) {
    let i = 0; //where to store the array
    for (let j = 0; j < arr.length; j++) {
        i += arr[j]; // i = i + arr[j]
    }
    return i;
}
console.log(sumOfArray(arr));

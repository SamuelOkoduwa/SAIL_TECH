#!/usr/bin/nodejs

// // Basic Conditions
// let accessLevel;
// accessLevel = 3;

// if (accessLevel >= 3) {
//     console.log("Welcome, Access Granted!")
// } else {
//     console.log("Error, Unathorised Access! ")
// }

// // Multiple conditions
// if (accessLevel == 1) {
//     console.log("Welcome, User1")
// } else if (accessLevel == 2) {
//     console.log("Welcome, User2")
// } else if (accessLevel == 3) {
//     console.log("Welcome, User3")
// }else {
//     console.log("Error, Unathorised Access! ")
// }

// user = {1...100}
// 1 -39 => fail
// 40 - 49
// 50 -59
// 60 - 69
// 70 - 100

// let user = prompt('Please enter your score ');
// score = parseInt(user)
// // let score = 56;
// if (score <= 39) {
//     console('Not yet')
// }
// else if (score >=70 ) {
//     console.log('Excellent Score');
// } else if (score >= 60 && score <= 69) {
//     console.log('Very good performance');
// } else if (score >= 50 && score <= 59) {
//     console.log('A good performance')
// } else if (score >=40 && score <= 49) {
//     console.log('A fair performance')
// } 


// Loops
// => For Loops

// const score = [39, 20, 48, 76, 90]
// for (let index = 0; index < score.length; index++) {
//     const element = score[index];
//     console.log(score[index])    
// }

// let user = prompt('Please enter your value ');
// let value = parseInt(user)

// // score = 6
// for (let i = 0; i <= 12; i++) {
//     let result = value * i;
//     let multipletable = `${value} x ${i} = ${result}`
//     console.log(multipletable)
// }

//odd numbers between 50 and 150
// let b;
// for (i = 50; i <= 150; i++) {
//     if (i % 2 == 1) {
//         b = "";
//         b++
//         console.log(b)
//     }
// }


/**
 * Other forms of array 
 * for in => Enumerables ==> Object 
 * for of => Iterables ==> Arrays
 * 
 */

// For of
// let names = ['Tooluth', 'Bukola', 'Otaiku', 'Lizzy', 'Isaiah']
// for (const name in names) {
//     console.log(name.toUpperCase);
// }
// // For in
// for(let a = 0; a < names.length; a++) {
//     // console.log(names[a])
// }

// // Cars => Object

// let car = {
//     manufacature: ['Volvo', 'Alfa Romeo', 'Hyundai'],
//     color: ['Black'],
//     trims: ['XLE', 'Limited edition'],
//     type: ['Sedan', 'CrossOver', 'SUV']
// }
// for(const c in car) {
//     // console.log(c)
// }

// // you cannot use the for of directly on Object. You have to use an object method to return
// // an array such as Object.entries, Object.key, Object.value, etc
// // 
// for(const c of Object.entries(car) ) {
//     console.log(c)
// }



//Tenary Opertor
// // A sample
// let rainy = true; 
// if (rainy) {
//     console.log('Use your Umbrella'); 
// } else {
//     console.log('Great weather');
// }
// // Using Tenary Operator
// let res = rainy 
// ? console.log('use your umbrella')
// : console.log('Great weather');

let smoker = 50;
let age = 18;

let smoke = age > smoker ? console.log('try paper'):
            (smoker > age) ? console.log('weed level'):
            console.log('kolos');



/**
 * Using teneary Write a program that greets either 'good morning, good afternoon, and good evening when a time is entered
 */

// let time = function timeEntered(time){
    // if (timeEntered < 12) {
    //     return 'Good morning';
    // } else if (timeEntered > 12.00 && timeEntered < 16.00 ){
    //     return 'Good afternoon';
    // } else {
    //     return 'Good evening';
    // } 
// }   

// function greet(time) {
//     let time = parseInt(t.split(":")[0])

//     let timer = (time >= 0 && time < 12 || time == 24) ? console.log('Good morning') :
//                 (time >= 12 && time < 17) ? console.log('Good afternoon') :
//                 (time >= 17 && time < 24) ? console.log('Good evening') :
//                 console.log('Enter the correct time')
// }


// Switch

let year = 2024

switch (year) {
    case year === typeof  "number": console.log('true');
    break;

    default: console.log('try again');
    break;
}
#!/usr/bin/node

/** 
 * Witre a program that out the sum of all even and odd numbers between
 * 1 - 250.
 * Exampe : evenTotal: ?, oddTotal: ?
 * 
 */

// 
let evenSum = 0
let oddSum = 0
for(i = 1; i <= 150; i++){
    
    if (i % 2 == 0) {
        evenSum += i
    }
    else {
        oddSum += i
    }
}
let Total = `evenTotal: ${evenSum}, oddTotal: ${oddSum}`
console.log(Total)
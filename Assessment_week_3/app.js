#!/usr/bin/node

/**
 * A JS Program that calculates and returns the result of the cube root of the number 27
 */

// The cube root for 27 = 3
let number = 27
let cubeRoot = Math.cbrt(number)
console.log(cubeRoot)//Print to the console
document.getElementById('cube_Root').innerHTML = cubeRoot // The DOM Manipulation


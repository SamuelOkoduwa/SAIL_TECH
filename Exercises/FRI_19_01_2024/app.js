#!/usr/bin/bash

/**
 * Write a javascript that countsdown from 50 to 0 and displays on the browser
 */

// On the console
for (i = 50; i >= 0; i--) {
    console.log(i)
}

// On the browser
let countdown = 50;
let interval = setInterval(function() {
    // Decremental Value
  countdown--;
  document.getElementById("countDown").textContent = countdown;

//   To stop to countdown when it gets to zero
  if (countdown === 0) {
    clearInterval(interval);  
    // An alert to signify it is finished
    alert("Countdown finished!");
  }
}, 1000); 
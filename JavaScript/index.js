#!/usr/bin/node

let timer = document.getElementById('timer');
let launchDate = new Date('2024-01-20T00:00:00').getTime();

let frank = setInterval(function () {
    let currentTime = new Date().getTime();
    remainingTime = launchDate - currentTime;
    // Days
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    // Hours 
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60));
    // Minutes
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    // Seconds
    const secs = Math.floor((remainingTime % (1000 * 60)) / 1000);
    // Display the timer
    timer.innerHTML = `${days} Days : ${hours} Hours : ${minutes} Minutes ${secs} Seconds`;

    if (remainingTime <= 0) {
        clearInterval()
        timer.innerHTML = `Your website is launched`;
    }
    
}, 1000);
// console.log(launchDate)
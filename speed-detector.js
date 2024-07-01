//Write a program that takes the speed of a car as input e.g 80. 
//If the speed is less than 70, it should print “Ok”.
// Otherwise, for every 5 km/s above the speed limit (70),
// it should give the driver one demerit point and print the total number of demerit points.

//> For example, if the speed is 80, it should print: 
//“Points: 2”. If the driver gets more than 12 points, the function should print:
// “License suspended”.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the speed of the car (in km/h): ", function(answer) {
    const speed = parseFloat(answer);
    const speedLimit = 70;
    const pointsPer5km = 5;
    const maxPoints = 12;

    if (isNaN(speed)) {
        console.log("Invalid input. Please enter a numeric value.");
    } else if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPer5km);
        if (demeritPoints > maxPoints) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }

    rl.close();
});

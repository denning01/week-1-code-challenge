// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


//Write a function that prompts the user to input student marks. 
//it creates an interface for reading the command line
const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

function gradeGenerator(grade) {
    // Select the grade range
    //A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
    //
     if (grade > 79 && grade <= 100) {
        return 'A';
    } else if (grade >= 60 && grade <= 79) {
        return 'B';
    } else if (grade >= 50 && grade <= 59) {
        return 'C';
    } else if (grade >= 40 && grade <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
//prompts the user to key-in the mark
r1.question("Enter student marks: ", function (input) {
    const mark = Number(input);
//returns the condition
    if (isNaN(mark) || mark > 100 || mark < 0) {
        console.log("This grade is Invalid!! Try again");
    } else {
        const grade = gradeGenerator(mark);
        console.log("Your grade is " + grade);
    }

    r1.close();
});

//redline creates an interface for reading from the input 
let readline = require('readline');
const { parseEnv } = require('util');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  

//creating a function that will determine the grade of the stident using if statements
function determineGrade(marks){

    let grade; 
    if (marks >= 80 && marks <= 100){
        grade = 'A';
    } else if( marks >= 60 && marks <= 79){
        grade = 'B';
    }else if (marks > 49 && marks <= 59){
        grade = 'C';
    }else if(marks >= 40 && marks <= 49){
        grade = 'D';
    
    }else if (marks >= 0 && marks < 40 ){
        grade = 'E';
    }else{
        grade = 'Invalid';
    }
    return grade;
}

function gradeDeterminer(){
    rl. question('Enter the studen\'s marks(0-100):' , (input) => {

        // parseFloat() method parses a value as a string and returns the first number
        const marks = parseFloat(input);

        if (isNaN(marks)|| marks < 0 || marks > 100 ){
            console.log("Input not within range of 0 - 100");
            rl.close()
            return;
        }
        const grade = determineGrade(marks);
        console . log(`The student's grade is: ${grade}`);
        rl.close()
    
    });

}
gradeDeterminer();
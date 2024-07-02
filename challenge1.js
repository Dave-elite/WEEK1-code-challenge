// inorder to view the output you will need to install prompt on your terminal (sudo prompt install)
const prompt = require('prompt');

prompt.start();
 

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
    prompt.get(['marks'], function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        const marks = parseFloat(result.marks)
    

        // parseFloat() method parses a value as a string and returns the first number
       

        if (isNaN(marks)|| marks < 0 || marks > 100 ){
            console.log("Input not within range of 0 - 100");
            return;
        }
        const grade = determineGrade(marks);
        console . log(`The student's grade is: ${grade}`);
        
    
    });

}
gradeDeterminer();
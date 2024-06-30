//redline creates an interface for reading from the input 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
//function to determine the grosssalary
function calculategrossSalary(bsalary, benefits){
    //The Math.abs() method returns the absolute value of a number.
    let grossSalary = Math.abs(bsalary + benefits)
    return grossSalary
}
//function to determine the nhif deductions 
function calculatenhif(grossSalary){
    let nhif;
    if(grossSalary < 6000){
        nhif = 150;
    }else if(grossSalary < 12000 && grossSalary >= 6000){
        nhif = 400;
    }else if(grossSalary < 20000 && grossSalary >= 12000){
        nhif = 750;
    }else if(grossSalary < 30000 && grossSalary >= 20000){
        nhif = 950;
    }else{
        nhif = 1500;
    }
    return nhif;
}
//function to determine nssf obligations
function calculatenssf(grossSalary){
    let nssf = Math.abs(grossSalary * 0.06); //assuming the rate is at 6%
    return nssf;
}
//function to determine the net salary after deductions
function calculatePayee(grossSalary, nhif, nssf){
    let deductions = Math.abs(nhif + nssf);
    let payee = Math.abs(grossSalary - deductions);
    return payee;
}
//function to enable the user to input the salary amount to determine the total deductions and the net salary
function SalaryGenerator(){
    rl.question('Enter the Salary Amount(0-1000000):',(input) => {
        const grossSalary = parseFloat(input);

        if(isNaN(grossSalary) || grossSalary < 0 || grossSalary > 1000000){
            console.log("Invalid Input.Please enter within the range of (0-1000000)");
            rl.close();
            return
        }
        const nhif = calculatenhif(grossSalary);
        const nssf = calculatenssf(grossSalary);
        const payee = calculatePayee(grossSalary, nhif,nssf);

        console.log(`NHIF Deductions: ${nhif}`);
        console.log(`NSSF Deductions: ${nssf}`);
        console.log(`Payee(salary after deductions:) ${payee})`);
        rl.close();

})
    }
    SalaryGenerator();


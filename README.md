Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

        ## GETTING STARTED
>the first thing is to create an interface using redline for node to enable reading from the input.
2: the second thing is to create a functions that will determine the grade of the student using if else statement to determine the grade 

3:return grade

4:The fourth thing is to create a function that will enable the user to input the marks 
>we will also use if statements to determine what we will do to the number/intergers that are not representeed in the if statements above
we will also console.log the ouput of the students grade 

5: Lastly we are going to call the function gradeDeterminer inorder to get the output

USAGE 

6: >go to terminal and enter node challenge1.js, you will recieve a prompt to enter the marks.
the terminal will give an output of the preferred grade depending on the marks entered



Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


        ## GETTING STARTED
The first thing is to create an interface using redline for node to enable reading from the input 
declare realine and rl 

2: write a function for the speed detector with speed as the argument 
    declare all the variables with their values (demeritPoints speedlimit points limit )

    >use if statement to determine which speed is ok based on the speed limit and console.log the output

    >declare speed variable with its value as 0

    >decleare overspeed and determine the overspeed by substracting the speed limit from the speed

    >determine the demerit points by dividing the overspeed by 5 which will give as the points

    >use if else statement to determine at what point the users license will be suspended 
    console.log the ouput if otherwise 

    function below takes users input for speed, inorder to give an output 
redline creates an interface for reading from the input

create a function speed determiner to determine the ouptu of the speed entered by the user 

call the function speedDeterminer for output


USAGE;

>go to terminal and enter node challenge2.js, you will recieve a prompt to enter the speed. 
>After the entering the speed the you will recieve an output (depending on the speed entered) of either "OK" "LICENSE SUSPENDED"


             Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.


        ## GETTING STARTED
The first thing is to create an interface using redline for node to enable reading from the input 
declare realine and rl 

>write a function to determine the gross salary which is determined through adding basic salary represented by bsalary and benefits
>declare gross salary and use method math.abs when adding the benefits and basic salary

>write the function to calculate the deductions for the gross salary
declare nhif
>use if else statement to determine the obligations based on the amount of the salary
>return nhif

>write a function to determine nssf obligations to detrmine the nssf obligations for the user 
>declare nssf
>multiply grosssalry with 6% assuming it is the rate to get deductions 
>use Math.abs() METHOD to determine the deductions necessary
return nssf

>write a function to determine the netsalary after deductions 
>declare deductions
>declare payee
>determine deductions by usinf method Math.abs and adding both nhif and nssf
>determine payee by using method Math.abs abd deducting deductions from gross salary
>return payee

>write function to enable the user to input the salary amount to determine the total deductions and the net salary
>declare grossSalary using parsefloat method
>use if else statement to determine what happens to the amount not represented in this case we isNaN() method
>console.log the output to show the user that it is invalid

>call the three functions above and console.log their output 

>call the last function salaryGenerator

>lastly to all problems open the terminal to check if the codes are working 

        USAGE


>go to terminal and enter node challenge3.js, you will recieve a prompt to enter the salary.
 the output will give the NHIF && NSSF deductions and the amount of money remaining after deductions
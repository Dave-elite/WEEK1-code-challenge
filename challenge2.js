//redline creates an interface for reading from the input 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
// write a function for speedDetector
function speedDetector(speed){
// variable declaration with their values
let demeritPoints = 1;
    let speedLimit = 70;
  let  pointslimit = 12;
//if statement to determine speed output
    if(speed < speedLimit){
        console.log("OK")

    }else{

        speed = 0
    const overspeed = speed - speedLimit;
      demeritPoints = Math.abs(overspeed/5)

    if (demeritPoints > pointslimit){
        console.log(`points: ${demeritPoints}.License suspended.`);
    } else {
        console.log(`points: ${demeritPoints}`);
    }
}
}
//funstion below takes users input for speed, inorder to give an output 
//redline creates an interface for reading from the input 
function speedDeterminer(){
    rl. question('Enter the speed:' , (input) => {
     speed = parseFloat(input);
        speed = speedDetector(speed); 
       
        rl.close()
    }) 
}
//calls the function for output
speedDeterminer();
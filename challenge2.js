// inorder to view the output you will need to install prompt on your terminal (sudo prompt install)
const prompt = require('prompt');

prompt.start();

// write a function for speedDetector
function speedDetector(speed){
// variable declaration with their values
let demeritPoints = 0;
    const speedLimit = 70;
  const  pointslimit = 12;
//if statement to determine speed output
    if(speed <= speedLimit){
        console.log("OK")

    }else{

    const overspeed = speed - speedLimit;
      demeritPoints = Math.floor(overspeed/5)

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
    prompt.get(['speed'] ,function(err, result){
        if(err){
            console.error(err);
            return;
}
const speed = parseFloat(result.speed);
if(isNaN(speed) || speed < 0 || !Number.isFinite(speed)){
    console.log("Invalid input please enter a number.");
}else{
    speedDetector(speed)
}
});
}
//calls the function for output
speedDeterminer();
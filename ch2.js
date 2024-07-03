function checkspeed(speed){
const speedLimit = 70
const kmPerDemeritPoint = 5;

if(speed <= speedLimit){
    return "ok"
}else {
    const demeritPoints = Math.floor((speed - speedLimit)/kmPerDemeritPoint)
    if(demeritPoints > 12){
        return "License suspended"
    }else{
        return `points: ${demeritPoints}`
    }
}
function promptSeep(){
    let speed = parseFloat(prompt("Enter the speed"));

    if (isNaN(speed) || speed < 0)
}
}

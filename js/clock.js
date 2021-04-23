

  setInterval(showTime, 1000);
function showTime(){


let time=new Date();
let hour=time.getHours()
let minute=time.getMinutes();
let seconds=time.getSeconds();
let ampm=" ";


if(hour>12){
    hour=hour-12
    ampm= "pm"
}
if(hour<=12){
    ampm="am"
   
}

let result= hour+":"+minute+":"+seconds+ ampm;

document.getElementById("MyClockDisplay").innerHTML=result;
console.log(hour)
}
showTime();
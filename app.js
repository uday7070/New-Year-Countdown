var day = document.getElementById("day");
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var time = "1 jan 2023"





function show(){
    var current = new Date();
    var n = current.getTime();
    var target = new Date(time);
    var t = target.getTime();
     var second = Math.floor((t - n)/1000);
     var days = Math.floor(second/3600/24);
     var hours = Math.floor((second/3600))%24;
     var mins =Math.floor( (second/60))%60;
     var secs = second%60;
     hour.innerHTML =hours ;
     day.innerHTML = days;
     min.innerHTML =format( mins);
     sec.innerHTML = format(secs);
     

   
    
}
setInterval(show,1000);

function format(time){
    return (time<10)?(`0${time}`):time;
}
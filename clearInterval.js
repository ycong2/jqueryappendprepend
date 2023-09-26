var timer = 0;
var timeset = setInterval(timefun, 1000)

function timefun(){
    timer++;
    console.log(timer);
    if(timer > 10){
        clearInterval(timeset);
    }
}
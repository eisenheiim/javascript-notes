//CALLBACKS: function passed as an argument to another function.
function display(sum){
    return sum;
}
function calculator(num1,num2,mycallback){
    let sum=num1+num2;
    mycallback(sum)
}

calculator(2,5,display)

//ASYNCHRONOUS: functions running in parallel with other functions.
setTimeout(function(){ console.log("i love you!!")},3000);

setInterval(time_funct,1000);

function time_funct(){
    let d = new Date();
    console.log(  d.getHours() + ":" +
  d.getMinutes() )
}
/*
Callback Alternatives
With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallel.

But, asynchronus programmes are difficult to write and difficult to debug.

Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

 */
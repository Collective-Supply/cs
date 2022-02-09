let d1 = new Date();
d1.toUTCString();

// "Sun, 18 Mar 2012 05:50:34 GMT" // two hours less than my local time

Math.floor(d1.getTime())

var d2 = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );

d2.toUTCString();
//"Sun, 18 Mar 2012 03:50:34 GMT" // four hours less than my local time, and two hours less than the original time - because my GMT+2 input was interpreted as GMT+0!

let x = Math.floor(d2.getTime()/ 1000)

console.log(x)

// use later for time stamp stuff
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

//node timer1.js 10 3 5 15 9 

//need to take in argv as the timer
//need to loop through argv to find the length
//need to get the values of the loop and make that the timer

//const times = process.arvg

// const alarmClock = function(times) {
let args = process.argv.slice(2);
for (let t = 0; t < args.length; t++) {
  let args2 = Number(args[t])
  if (Number.isInteger(args2) && args2 > 0) {
    setTimeout (() => process.stdout.write('.' + '\x07'), (args2*1000))
  }
}


// try and thinking about conditionals in the opposite i.e not checking for (negative) but check that it is positive instead - are you not these things

//typeof variable = string number

//taking as a string to need to parse as integer / convert to number and check tht it is NaN Number(args[t]) return value will give number or NaN

//parse it out and check result !NaN and checkif greater than 0

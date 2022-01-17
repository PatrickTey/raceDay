let raceNumber = Math.floor(Math.random() * 1000);
let runnerEarly = !true;
let runnerAge = 16;

if (runnerAge > 18 && runnerEarly) {
    raceNumber += 1000;
}
if (runnerAge > 18 && runnerEarly) {
    console.log('You will race at 9:30am')
}
else if (runnerAge > 18 && !runnerEarly) {
    console.log('You will race at 11:00am');
}
else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm and your Race Number is ${raceNumber}`);
}
else {
    console.log('see reg desk');
}
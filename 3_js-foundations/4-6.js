/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var sec = 60;

while (sec => 0 && sec <= 60) {
    if (sec === 50) {
        return ("Orbiter transfers from groud to internal power");
    } else if (sec === 0) {
        return ("Solid rocket booster ignition and liftoff!");
    } else {
        return sec
    }

    sec -= 1;
}
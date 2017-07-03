/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "ballroom") {
    weapon = "poison";
    suspect = "Mr. Kalehoff";
} else if (room == "gallery") {
    weapon = "trophy";
    suspect = "Ms. Van Cleve";
} else if (room == "billiards room") {
    weapon = "pool stick";
    suspect = "Mrs. Sparr";
} else {
    weapon = "knife"
    solved = true;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
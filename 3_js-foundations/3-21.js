/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education => "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
switch (education) {
    case "a Doctor's degree":
        salary = 84396;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "an Bachelor's degree":
        salary = 59124;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    default:
        salary = 25636;
}

console.log("In 2015, a person with " + education + "earned an average of $" + salary.toLocaleString("en-US") + "/year.")
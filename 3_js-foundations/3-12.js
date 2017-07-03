/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0.00;
var checkBalance = false;
var isActive = true;

// your code goes here
if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        return ("Your balance is $" + balance.toFixed(2) + ".");
    } else if (isActive === false) {
        return ("Your account is no longer active.");
    } else if (balance === 0) {
        return ("Your account is empty.");
    } else {
        return ("Your account is negative. Please contact the bank.")
    }
} else {
    return ("Thank you. Have a nice day!")
}
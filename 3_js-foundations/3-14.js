/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth => 18 && shirtWidth < 20) && (shirtLength => 28 && shirtLength < 29) && (shirtSleeve => 8.13 && shirtSleeve < 8.38)) {
    return ("S");
} else if ((shirtWidth => 20 && shirtWidth < 22) && (shirtLength => 29 && shirtLength < 30) && (shirtSleeve => 8.38 && shirtSleeve < 8.63)) {
    return ("M");
} else if ((shirtWidth => 22 && shirtWidth < 24) && (shirtLength => 30 && shirtLength < 31) && (shirtSleeve => 8.63 && shirtSleeve < 8.88)) {
    return ("L");
} else if ((shirtWidth => 24 && shirtWidth < 26) && (shirtLength => 32 && shirtLength < 33) && (shirtSleeve => 8.88 && shirtSleeve < 9.63)) {
    return ("XL");
} else if ((shirtWidth => 26 && shirtWidth < 28) && (shirtLength => 33 && shirtLength < 34) && (shirtSleeve => 9.63 && shirtSleeve < 10.13)) {
    return ("2XL");
} else if (shirtWidth === 28 && shirtLength === 34 && shirtSleeve === 10.13) {
    return ("3XL");
} else {
    return ("N//A");
}
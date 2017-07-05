var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    var firstNameUpper = names[0].slice(0, 1).toUpperCase();
    var firstNameLower = names[0].slice(1).toLowerCase();
    var firstName = firstNameUpper + firstNameLower;
    var lastName = names[1].toUpperCase();

    finalName = firstName + " " + lastName;
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));
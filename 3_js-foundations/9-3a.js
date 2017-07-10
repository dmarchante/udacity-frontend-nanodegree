<<<<<<< HEAD
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
=======
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    // Don't delete this line!
    return finalName;
};

// Did your code work? The line below will tell you!
>>>>>>> 54477387448802b83ba7e7e4d1808738d7b1135c
console.log(nameChanger(name));
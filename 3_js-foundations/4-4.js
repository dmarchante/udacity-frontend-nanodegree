/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        return ("Julia");
    } else if (x % 5 === 0) {
        return ("James");
    } else if (x % 3 === 0 && x % 5 === 0) {
        return ("JuliaJames");
    } else {
        return (x);
    }
    x += 1;
    // check divisibility
    // print Julia, James, or JuliaJames
    // increment x
}
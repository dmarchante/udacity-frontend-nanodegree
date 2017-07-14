var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    return obj;
};

//var move = function() {
//    this.loc++;
//};

//var move = function(car) {
//    removeCarFromScreen(car.loc);
//    addDustSwirlToScreen(car.loc);
//    car.loc++;
//    addCarToScreen(car.loc);
//};
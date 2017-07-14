var Car = function(obj, loc) {
    obj = { loc: loc };
    extend(obj, Car.methods);
    return obj;
};

Car.method = {
    move: function() {
        this.loc++;
    },
};
//var move = function(car) {
//    removeCarFromScreen(car.loc);
//    addDustSwirlToScreen(car.loc);
//    car.loc++;
//    addCarToScreen(car.loc);
//};
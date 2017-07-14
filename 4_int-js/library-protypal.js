var Car = function(loc) {
    varobj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};


Car.prototype.move = function() {
    this.loc++;
};

//Car.methods = {
//    move: function() {
//        this.loc++;
//    },
//};

//var move = function(car) {
//    removeCarFromScreen(car.loc);
//    addDustSwirlToScreen(car.loc);
//    car.loc++;
//    addCarToScreen(car.loc);
//};
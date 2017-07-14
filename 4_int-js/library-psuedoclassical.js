var Car = function(loc) {
    //this = Object.creat(Car.prototype);
    //var obj = Object.create(Car.prototype);
    this.loc = loc;
    //return obj;
    //return this;
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
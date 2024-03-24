function carInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        var key = Object.keys(extra)[0];
        car.extras[key] = extra[key];
    }
    return car;
}
// Call the function with required information and additional name-value pairs
var carInfoObj = carInfo('Toyota', 'Corolla', { color: 'red' }, { year: 2023 });
// Print the returned object
console.log(carInfoObj);

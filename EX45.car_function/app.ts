function carInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): { manufacturer: string, modelName: string, extras: { [key: string]: any } } {
    let car: { manufacturer: string, modelName: string, extras: { [key: string]: any } } = {
        manufacturer: manufacturer,
        modelName: modelName,
        extras: {}
    };

    for (let extra of extras) {
        let key = Object.keys(extra)[0];
        car.extras[key] = extra[key];
    }

    return car;
}

// Call the function with required information and additional name-value pairs
let carInfoObj = carInfo('Toyota', 'Corolla', { color: 'red' }, { year: 2023 });

// Print the returned object
console.log(carInfoObj);

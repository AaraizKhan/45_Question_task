var sandwich1 = ['Ham', 'Cheese', 'Lettuce'];
var sandwich2 = ['Turkey', 'Swiss Cheese'];
var sandwich3 = ['Tuna Salad'];
function make_Sandwich() {
    var simpleFunc = sandwich1;
    console.log(simpleFunc);
    return simpleFunc;
}
var response = make_Sandwich(); //invoked
console.log(response);

var size = ['large', 'medium'];
var defaultMessage = "I love Typescript";
var largeShirt = ("Shirt size is : ".concat(size[0], " and ").concat(defaultMessage));
var mediumShirt = ("Shirt size is : ".concat(size[1], " and ").concat(defaultMessage));
var extraLarge = ("shirt is extralarge and I love javascript");
function make_tshirt() {
    var simpleFunc = (extraLarge);
    console.log(simpleFunc);
    return simpleFunc;
}
var response = make_tshirt();
console.log(response);

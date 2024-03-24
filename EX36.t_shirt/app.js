var size = ['small', 'medium', 'large'];
var message1 = "This shirt is for casual wearing";
var message2 = "This shirt is for formal wearing";
var message3 = "This shirt is for party wearing";
function make_tshirt() {
    var simpleFunc = ("This is a ".concat(size[0], " shirt and ").concat(message1));
    console.log(simpleFunc);
    return simpleFunc;
}
var response = make_tshirt();
console.log(response);

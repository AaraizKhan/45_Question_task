// UNCHANGED MAGICIAN NAMES WITHOUT "THE GREAT"
console.log("UNCHNAGED MAGICIAN LIST\n");
var magician_list = ['David Copperfield', 'Harry HoudiniPenn', 'Jillette', 'Teller'];
var modified_list = ['David Copperfield The Great', 'Harry HoudiniPenn The Great', 'Jillette The Great', 'Teller The Great'];
for (var i = 0; i < magician_list.length; i++) {
    function show_magicians() {
        var simpleFunc1 = magician_list;
        console.log(simpleFunc1);
        return (simpleFunc1);
    }
    var response = show_magicians();
    console.log(response);
}
//CHANGED MAGICIAN NAMES INCLUDING "THE GREAT"
console.log("\n\n\n");
console.log("MODIFIED MAGICIAN LIST INCLUDING \"THE GREAT\" \n");
for (var i = 0; i < modified_list.length; i++) {
    function make_great() {
        var simpleFunc2 = modified_list;
        console.log(simpleFunc2);
        return (simpleFunc2);
    }
    var response = make_great();
    console.log(response);
}

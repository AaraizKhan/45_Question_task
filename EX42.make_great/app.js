var modified_list = ['David Copperfield The Great', 'Harry HoudiniPenn The Great', 'Jillette The Great', 'Teller The Great'];
for (var i = 0; i < modified_list.length; i++) {
    function make_great() {
        var simpleFunc = modified_list;
        console.log(simpleFunc);
        return (simpleFunc);
    }
    var response = make_great();
    console.log(response);
}

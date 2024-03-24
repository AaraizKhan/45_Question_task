var magician_list = ['David Copperfield', 'Harry HoudiniPenn', 'Jillette', 'Teller'];
for (var i = 0; i < magician_list.length; i++) {
    function show_magicians() {
        var simpleFunc = magician_list;
        console.log(simpleFunc);
        return (simpleFunc);
    }
    var response = show_magicians();
    console.log(response);
}

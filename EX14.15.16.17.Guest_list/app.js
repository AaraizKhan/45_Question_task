var guest_list = ["usman", "ahmed", "fahad", "umar"];
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// } 
var not_coming = "usman";
var new_guest = "sami";
guest_list[0] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// } 
// console.log(`Mr ${not_coming}, is not coming for dinner tomorrow.`)
guest_list.unshift("Rondaldo");
guest_list.splice(guest_list.length / 2, 2, "Messi");
guest_list.push("Babar Azam");
// for (let i=0; i<guest_list.length; i++){
//     console.log(`Dear ${guest_list[i]}\n\nYou are invited for a dinner tomorrow.\n\nThank you.\n\n`);
// } 
// console.log(`We have found a bigger dinner table so we invited more guests`);
console.log("\n\nUnfortunately we are out of space, so have space for two guests only.\n\n");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry, Dear ".concat(removed_guest, ", You are not invited for a dinner tomorrow"));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Dear ".concat(guest_list[i], "\n\nYou all are still invited for a dinner tomorrow.\n\nThank you.\n\n"));
}
guest_list.splice(0, 2);
console.log(guest_list);

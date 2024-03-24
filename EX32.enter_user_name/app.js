var current_user = ['saim', 'talha', 'shaheer', 'hammad', 'usman'];
var new_user = ['saim', 'adil', 'mubashir', 'fahad', 'usman'];
var username = new_user[1].toLowerCase();
if (current_user.indexOf(username)) {
    console.log("Sorry, the username '" + new_user[0] + "' is already taken. Please enter a new username.");
}
else {
    console.log("Congratulations! The username '" + new_user[1] + "' is available.");
}

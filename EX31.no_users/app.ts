let users: string[] = ['']

for (let user of users){ 
    if (user === 'admin') {
        console.log("Hello admin, would you like to see a status report?")
    } 
    else if (user === 'users'){
        console.log(`Hello ${user}, thank you for logging in again.`)
    } 
    else {
        console.log("We need to find some users!")
    }
}

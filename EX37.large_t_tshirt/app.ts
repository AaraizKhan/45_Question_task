let size: string[] = ['large' , 'medium']

let defaultMessage = "I love Typescript"
let largeShirt = (`Shirt size is : ${size[0]} and ${defaultMessage}`)
let mediumShirt = (`Shirt size is : ${size[1]} and ${defaultMessage}`)
let extraLarge = (`shirt is extralarge and I love javascript`)
function make_tshirt(){
    let simpleFunc = (extraLarge)
    console.log(simpleFunc)
    return simpleFunc
}
let response = make_tshirt()
console.log(response)
let size: string[] = ['small' , 'medium' , 'large']
let message1 = "This shirt is for casual wearing"
let message2 = "This shirt is for formal wearing"
let message3 = "This shirt is for party wearing"

function make_tshirt(){
    let simpleFunc = (`This is a ${size[0]} shirt and ${message1}`)
    console.log(simpleFunc)
    return simpleFunc
}
let response = make_tshirt()
console.log(response)
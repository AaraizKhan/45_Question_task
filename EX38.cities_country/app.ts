let cities: string[]=['karachi' , 'delhi' , 'jeddah']
let countryList: string[]=['pakistan' , 'India' , 'SaudiArabia']
let location1 = (`${cities[0]} is in ${countryList[0]}`)
let location2 = (`${cities[1]} is in ${countryList[1]}`)
let location3 = (`${cities[2]} is in ${countryList[2]}`)

function describe_city(){
    let simpleFunc = (location3)
    console.log(simpleFunc)
    return simpleFunc
}
let response = describe_city()
console.log(response)
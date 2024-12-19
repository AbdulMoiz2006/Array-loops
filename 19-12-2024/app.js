
// Map ek array ka method hai jo har element par ek function apply 
// karta hai aur nayi array return karta hai.

var arr = ["10","20","30","40"]

var doubleNumber = arr.map(function(num){

    return num* 3

})

console.log(doubleNumber)
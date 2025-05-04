const fruits = ['Banana','Apple','Berries','Orange']


// ============  display table ============== //

// const Display = function (fruit, key, array){

//     //example
//     console.log(array[key])

//     console.log(`${key} : ${fruit}`)
// }


// // Display is callback function
// fruits.forEach(Display)

// //=========================

// for(let i=0; i < fruits.length;i++)
// {
//     console.log(`${i} : ${fruits[i]}`);
// }

//=========================

// for(let fruit of fruits)
// {
//     console.log(fruit)
// }

// for(let [key, fruit] of fruits.entries())
// {
//     console.log(`${key} : ${fruit}`);
// }

// ============  display table ============== //

// ============  modify table ============== //

let numbers = [0,1,2,3,4,5,6]

// numbers = numbers.map(function(value){
//     return value * 2
// })

// map

// numbers = numbers.map(value => value * 2)

// filter

// numbers = numbers.filter(function (value)
// {
//     // if(value > 3)
//     //     return value

//     return value > 3
// })

// some return  bool true / false

// numbers = numbers.some(function(value){
//     // return value > 3
//     return value === 'a'
// })

// let everyNumbers = [0,1,2,3,4,5,6]

// everyNumbers = everyNumbers.every(function(value){
//     // return value > 3
//     return value < 7
// })

// let fillNumbers = [0,1,2,3,4,5,6]

// fillNumbers = fillNumbers.fill('t', 2, 5)

// console.log(fillNumbers)


let everyNumbers = [0,1,2,3,4,5,6]


let sum = everyNumbers.reduce(function(accumulator, value){
    // accumulator is the resolt of the curent position of the index element array
    // value : value of etch element in the array
    return accumulator + value
}, 0)

// 0 is the initiale value (0(initila value) + 0(first element in table) )

console.log(sum)


// ============  modify table ============== //

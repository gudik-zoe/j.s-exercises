//showing the items
// let arr = [2, 4, 6]

function sumAll(a) {
  let sum = 0
  for (let i = 0; i < a.length; i++) {
    sum += a[i]
  }
  console.log(sum)
}

// sum(arr)
// // a.forEach(item => console.log(item))

// doubling items of an array
// let b = arr.map(i => i * 2)
// console.log(b)

//check if there is an even number
// // console.log(arr.some(item => item % 2 == 0))
// function iseven(a) {
//   return a % 2 === 0
// }
// console.log(arr.some(iseven))

//find me the first even number
// let otherArray = arr.filter(item => item * 2)
// console.log(otherArray)

//check if all items are even
// console.log(a.every(item => item % 2 == 0))

// console.log(a.find(item => item % 2 != 0))

// function firsteven(a) {
//   for (let i in a) {
//     if (a[i] % 2 == 0) {
//       console.log(a[i])
//       break
//     } else {
//       console.log(-1)
//       break
//     }
//   }
// }

// let b = arr.filter(item => item % 2 != 0)
// // console.log(b)
// b = b.map(item => item ** 2)
// // console.log(b)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr = arr.reduce((acc, item) => {
  mult = item * 2
  return acc
}, 1)
console.log(arr)

// let sum = (a, b) => a + b

// let theSum = arr.reduce(sum, 0)

// const sumAll = arr => {
//   let acc = 0
//   for (let item of arr) {
//     acc += item
//   }
//   return acc
// }

// const isEven = num => num % 2 === 0
// const square = num => num ** 2
// const sum = (a, b) => a + b

// const sumSquareOfEvens = arr =>
//   arr
//     .filter(isEven)
//     .map(square)
//     .reduce(sum, 0)

// function sumSquareOfEvens(arr) {
//   return arr.reduce((acc, item) => {
//     if (isEven(item)) {
//       acc = sum(acc, square(item))
//     }
//     return acc
//   }, 0)
// }

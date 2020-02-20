// // // // // // let arr = [
// // // // // //     'antoine'
// // // // // //     ,'khoury',
// // // // // //     'powercoders']

// // // // // //  let arr = [] ;
// // // // // //  for (let i = 1 ; i <=10 ; i++){

// // // // // //      arr.push(i*2) }

// // // // // //     //  console.log(arr)

// // // // // //splice logic
// // // // // //(the position , how many elements u want to remove,the thing that u wanted to add)
// // // // // // let styles = ['jazz' , 'blues']
// // // // // // styles.push('rock-n-roll',)
// // // // // // // console.log(styles)
// // // // // // styles.splice(styles.length/2 ,1 , 'classics')

// // // // // // console.log(styles.slice(0,1))

// // // // // // let arr = ['a' , 'b'];
// // // // // // arr.push(function() {
// // // // // //     return(this)
// // // // // // }
// // // // // // )
// // // // // // console.log (arr[2])

// // // // // // let arr = [ 1 , -2 ,3 , 4 , -9 , 6]
// // // // // // let sum = 0;

// // // // // // for( let i in arr) {
// // // // // // if (arr[i] > 0) {
// // // // // //     sum += arr[i]
// // // // // // }
// // // // // // }
// // // // // // console.log(sum)
// // // // // // 1 -
// // // // // // let arr = [1,2,3,4,5,6,7,8,9,10]
// // // // // // for (key in arr){

// // // // // //  console.log (arr[key])}

// // // // // // function double (x){
// // // // // //   for (key in x) {
// // // // // //     x[key] *= 2
// // // // // //   }
// // // // // // }

// // // // // // console.log(double(a))
// // // // // // console.log (a)
// // // // // let a = [2, 4, 4, 7]
// // // // // function check(x) {
// // // // //   for (let key in x) {
// // // // //     if (x[key] % 2 == 0) {
// // // // //       return true
// // // // //     } else {
// // // // //       return false
// // // // //     }
// // // // //   }
// // // // // }

// // // // // console.log(check(a))

// // let arr = [1, 3, 2, 5, 4]
// // function firsteven(a) {
// //   for (let i in a) {
// //     if (a[i] % 2 == 0) {
// //       console.log(a[i])
// //       break
// //     }
// //   }
// // }
// // firsteven(arr)

// // let arr = [4, 3, 2, 5]

// // function allevens(a) {
// //   let x = []
// //   for (let i in a) {
// //     if (a[i] % 2 == 0) {
// //       x.push(a[i])
// //     }
// //   }
// //   console.log(x)
// // }
// // allevens(arr)

// // let arr = [1, 3, 7, 3, 4, 6, 8]
// // function creator(a) {
// //   let x = []
// //   for (let i in a) {
// //     if (a[i] % 2 == 0) {
// //       x.push(a[i])
// //     }
// //   }
// //   console.log(x)
// // }

// // creator(arr)

// // // // // let arr = [1, 2, 3, 4, 5]

// // function sum(a) {
// //   let sum = 0
// //   for (let i in a) {
// //     sum += a[i]
// //   }
// //   return sum
// // }

// // // // // // sum(arr)

// // let arr = [2, 4, 3]
// // function odd(a) {
// //   let x = 0
// //   let sum = 0
// //   for (let i in a) {
// //     if (a[i] % 2 == 0) {
// //       x = a[i] ** 2
// //       sum += x
// //     }
// //   }
// //   console.log(sum)
// // }

// odd(arr)

// // let arr = [1, 2, 3, 4]

// // arr.splice(arr.length / 2, 1, 4)
// // console.log(arr)
// the first even number or -1
// let arr = [2, 4, 5, 7]

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

// firsteven(arr)

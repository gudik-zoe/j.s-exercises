//  let i = 2.9
//  while (i < 3) {
//      console.log (i++)
//  }


// let num = Math.floor(Math.random()*10)
// let number = prompt('guess a number fomr 1 to 10')

// if (num === number) {
//     alert('right answer')
// }
// else {
//     alert(number + ' ' + 'is the wrong answer the answer is i thought about ' + num)
// }
// while (num != number) {
//     prompt('guess a number fomr 1 to 10')

//     if (num === number) {
//         alert('right answer')
//     }
//     else {
//         alert(number + ' ' + 'is the wrong answer the answer is i thought about ' + num)
//     }}

// let i = 3
// while (i > 0) {
//     console.log(i)
//     --i
// }

// let word = 1 ;
// while (word < 16 )
// {
//     word ++
// console.log ( 'nan' ) ;

// }
// console.log ('batman')
// let str = 'nan ';
// let print = '';
// let count = 0 
//  while (count < 16) {
//      print +=  str
//     count++ 
// }
// console.log( print +'batman')
// let str = 'nan ';
// let print = '';
// for (let count = 0 ;count < 16 ; count++) 
// {
//     print += str;
// }
// console.log(print + 'batman')

//odd numbers list
// let n  = 1;
// while (n < 50) {
// console.log(n*2-1)
// n++
// }

 
//   let n = 0;
//   while (n < 50) {
//       console.log(n*2)
//       n++
//   }

//  let n = 1;
//  let sum = 0;
//  while (n < 4) {
//      sum += n 
//      n++
//  }
//  console.log (sum)
//the sum of the even numbers
// let n = 1  ;
// let sum = 0 ;
// while (n < 10) {
//     if (n %  2 == 0) {
//         sum += n   
// }
// n++
// }
// console.log (sum)
//the sum of the odd numbers
// let n = 1  ;
// let sum = 0 ;
// while (n < 10) {
//     if (n %  2 != 0) {
//         sum += n   
// }
// n++
// }
// console.log (sum)

// printing the alphabet 
// let i = 97;
// let b =65 ;
// let str = '' ;
// count = 0;
// while (count < 26){
// console.log(String.fromCharCode(b) + String.fromCharCode(i))
// count++
// i++ 
// b++
// }

// multiplications table
//  let i = 1;
//   let count = 0;
//   let result = i * count
//   while (count < 11) {
//       count++
//       i++
//       result += result
//   }
//   console.log(result)
  

//guessing the number of the digits
//   let num = 344;
//   if (num / 10 < 1) {
//   console.log(1)
//   }
//   else if (num / 100 < 1 ) {
//       console.log(2)
//   }
//   else if (num / 1000 < 1) {
//       console.log(3)
// }

 
// let counter = 1 ;
// let number = 22;
// let i = 10 ;
// let result = number / i ;
// while (result < 0) {
//     console.log(counter)
// if (result > 0 )
// i = i * 10
// counter ++
//  }
//  console.log(counter)

 

//  let digit=4566;
//  let result= String(digit);
//  let final = result.indexOf(0);
//  console.log(final)

let num = 76724277962828;
let stNum = String(num);
let result = "The first digit is: "+ stNum[0] +"\nThe last digit is: "+ stNum[stNum.length-1];
console.log(result);

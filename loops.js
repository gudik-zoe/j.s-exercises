//  let i = 2.9
//  while (i < 3) {
//      console.log (i++)
//  }


//  let num = Math.floor(Math.random()*10)
//  let number = prompt('guess a number fomr 1 to 10')

//  if (num === number) {
//      alert('right answer')
//  }
//  else {
//      alert(number + ' ' + 'is the wrong answer the answer is i thought about ' + num)
//  }
//  while (num != number) {
//      prompt('guess a number fomr 1 to 10')
//     if (num === number) {
//          alert('right answer')
//      }
//      else {
//          alert(number + ' ' + 'is the wrong answer the answer is i thought about ' + num)
//      }}

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
//  let n  = 1;
//  while (n < 50) {
//  console.log(n*2-1)
//  n++
//  }


//    let n = 0;
//    while (n < 50) {
//        console.log(n*2)
//        n++
//    }

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
// for (let i = 1 ; i < 10 ; i++) {
// let str = '';
// let i = 2;
// let count = 1;
// while (count < 11) {
//     let result = i * count
//     console.log(result)
//     count++

// }




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

// let num = 76724277962828;
// let stNum = String(num);
// let result = "The first digit is: "+ stNum[0] +"\nThe last digit is: "+ stNum[stNum.length-1];
// console.log(result);


    // let num = prompt ('choose a number equal or greater than 100') ; 
    //     if  (num >= 100) {
    //      alert ('good job') 
    //  }
    //  else if ( num != 100) {
    //  alert ('wrong')
    //  }
    // while (num != 100){
    //     alert ('try again')
    //     let num = prompt ('guess a number') ; 
    //     if  (num >= 100) {
    //     alert ('good job') 
    //      break
    //  }
    //  else if ( num != 100) {
    //  alert ('wrong')
    //  } }


//same game less code

//     let num = prompt ('choose a number equal or greater than 100') ; 
//    while (num < 100){
//      alert ('try again')
//      num = prompt ('guess a number') ; 
//      if  (num >= 100) {

//       break;}
//      }
//       alert ('good job')


//   stupid game 
//     alert (`ready for the game if yes press ok`)
//     alert (`you will see a list of numbers pick one and keep it in your mind and i'll try to guess what was  it  and then i'll HIDE IT`)
//     alert (`2.2    2.3    2.4
//     3.3    3.4    3.5
//     4.3    4.4    4.5`)
//     alert (`loading...guessing your number...and hiding it`)
//     alert (`ready for the fun?`)
//     alert (`can you find it?
//     2.6    2.5     2.7
//     3.6    3.7     3.8
//     4.6    4.5     4.7`)
//   alert(`did you like the trick?`)

//  let num = 1231.32;

//  console.log (num / Math.floor(num))

//guessing a decimal or not decimal numbers

//  let num = prompt('write a number')
//  if (num - Math.floor(num) != 0) {
//    alert ('it is a decimal number ')
//  } else if (num - Math.floor(num) == 0) {
//    alert('it is not a decimal number')
//  }

//    let num = prompt ('choose a number')
//     if (num%2 && num%3 && num%4 && num%5 && num%6 && num%7 && num%8 && num%9 && num%10  != 0) {
//        alert('the number is  prime')
//    }
//    else if ( num%2 || num%3 || num%4 || num%6 || num%7 || num%8 || num%9 || num%10  != 0 ) {
//        alert ('the number is not prime')
//    }

//  let num = 1 ;
//  while (num < 256) { 
//      if (num%2 && num%3 && num%4 && num%5 && num%6 && num%7 && num%8 && num%9 && num%10  != 0){
//      console.log(num)
//      }
//      else if (num==2 || num==3 || num==5 || num==7 ){
//          console.log(num +' '+ 'is prime')
//      }
//      num++
//  }








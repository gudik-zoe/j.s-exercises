 
// // // // // // //  //declare an object
// // // // // // //  let person  = {
// // // // // // //     name:'antoine',
// // // // // // //     surename:'khoury',
// // // // // // //     yearOfBirth:'1993',
// // // // // // //    monthOfBirth:'october'

// // // // // // // }

// // // // // // // // for (let result in person ){
// // // // // // // //     console.log(result,':'+person[result]);
// // // // // // // // }

// // // // // // // let newobject = Object.assign({},person)
// // // // // // // console.log(newobject)

// // // // // // let information = {
// // // // // //     car:'fiat', type:'4 * 4' , model:'1995',seats: '4' ,
// // // // // //     colors:{
// // // // // //       first:'blue', second:'yellow' , third:'red',
// // // // // //     },
// // // // // //     sum: function (a,b){
// // // // // //       return(a+b)
// // // // // //     },
// // // // // // }


// // // // // // console.log(information.sum(3,5))

// // // // // let user = {} ;
// // // // // user.name = 'john';
// // // // // user.userName = 'smith';
// // // // // user.name = 'pete';

// // // // // delete user.name
// // // // // console.log(user)

// // // // let salaries = {
// // // //     John: 100,
// // // //     Ann: 160,
// // // //     Pete: 130,
// // // //   }
 
// // // // let sum = 0;
// // // // for (let key in salaries){  
// // // //     sum += salaries[key]
// // // // }
// // // // console.log(sum)

// // // let menu = {
// // //     width: 200,
// // //     height: 300,
// // //      title: "My menu"
// // //   };

// // //   function multiplication(x){
// // //       for (let key in x) 
// // //       if (typeof(x[key])== 'number'){
// // //         x[key]*= 2 
// // //       } 
// // //   }

// // // multiplication(menu)
// // // console.log(menu);


// // // let obj = {
// // //     name:'hello', cognome:'world' , batno:'!',
    
    
// // // }
// // // let str = ''
// // // for (shmal in obj){
// // //      str = str + ' ' +  obj[shmal]
// // // }
// // // console.log(str)




// // // let code1 = {
// // //     a:'25',
// // //     b:'24',
// // //     c:'23',
// // //     d:'22',
// // //     e:'21',
// // // }
// // // let code2 = {
// // //     a:21,
// // //     b:22,
// // //     c:24,
// // //     d:25,
// // //     e:26,
// // // }
// // //write abcde code2 without adding 2524232221
// // ///the sum of abcde+abcde =? 
// // // let sum = 0;
// // // let sum2 = 0;
// // // for (let key in code2){
// // //     sum += code2[key];
// // // }
// // // for (let key in code1){
// // //    sum2 += Number(code1[key])
// // // }

// // // function objectMaker(a,b,c,d){
// // //     return  {
// // //     name:a , surename:b , age:c , sport:d,}
// // // }



// // //  let obj = objectMaker('antoine', 'khoury' , 26 , 'soccer')

// // // console.log(obj)

// // // the deep clone

// // //console.log (JSON.stringify(obj))  

// // // memoized factorial
// // // 6! = 6 * 5 * 4 * 3 * 2 * 1
// // // factorial(6) = 720 (computed)
// // // factorial(6) = 720 (got from cache)

// // // // let factorials = {}
// // // let mult = 1 ;
// // //  function calcul(n){
// // //       for (let n = n ; n>0 ; n--){
// // //           return mult += n
// // //       }
// // // //  }
// // // // let lastresult = 1;

// //  let obj = {
// //      name:'asdi' , cognome : 213 , adress:'asd ' , 
// //      sizes : { weught : 123 , height : 123 , hello : 'hi'

// //      }
// //  }


// // let otherObject = Object.assign({} , obj)

// // for (let key in otherObject){
// //     console.log([key] , obj[key])
// // }



// // let tony = 'name';
// // let asem = 23;




// // console.log(typeof(obj))

// let user = {
//     name:'antoine' , 
//     surname:'khoury', 
//     sayHi: function(a){
//         return('hi'+ a) 
//     },
// }

// // console.log(user.sayHi())


// let n = '23.4467' ;
// n= parseInt(n)
// console.log(n)
// let m=String(n)
// console.log(m)





//methods exercises

// let user = {
//     name: "John",
//     go: function() { return(this.name) }
//   }
  
//  console.log((user.go)())


// let calculator = {
//      n:prompt('insert a number'),
//      m:prompt('insert another number'),

//     sum: function(){
//         return (parseInt(this.n )+ parseInt(this.m))
//      },

    
    
//     mult: function () {
//         return this.n * this.m 
//     },
// }

// alert(calculator.sum()) 
// alert(calculator.mult())


let ladder = {
    step: 0,
    up() {
      this.step++;
      return this 
    },
    down() {
      this.step--;
      return this 
    },
    showStep: function() { 
      return( this.step );
      return this
    }
  };

console.log(ladder.up().up().down().up().down().showStep())




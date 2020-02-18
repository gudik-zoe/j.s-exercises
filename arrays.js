// let arr = [
//     'antoine' 
//     ,'khoury',
//     'powercoders']
    
//  let arr = [] ;
//  for (let i = 1 ; i <=10 ; i++){


//      arr.push(i*2) }

//     //  console.log(arr)

//splice logic 
//(the position , how many elements u want to remove,the thing that u wanted to add)
// let styles = ['jazz' , 'blues']
// styles.push('rock-n-roll',)
// // console.log(styles)
// styles.splice(styles.length/2 ,1 , 'classics')

// console.log(styles.slice(0,1))

// let arr = ['a' , 'b'];
// arr.push(function() {
//     return(this)
// }
// )
// console.log (arr[2])



// let arr = [ 1 , -2 ,3 , 4 , -9 , 6]
// let sum = 0;

// for( let i in arr) {
// if (arr[i] > 0) {
//     sum += arr[i]
// }
// }
// console.log(sum)
// 1 - 
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for (key in arr){

//  console.log (arr[key])}

// function double (x){
//   for (key in x) {
//     x[key] *= 2
//   }
// }

 let a = [1,5,7,21,93,4]

// console.log(double(a))
// console.log (a)

function check (x) {
for (key in x) 
if ((x[key])%2 == 0){
    console.log ('there is an even number ')
}
}

check(a)

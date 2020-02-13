
 function check (n) {
    let str = '';
    for ( i = 0 ; i< n.length ; i++ ){
        if (String(n[i]) !== 'a' && String(n[i]) !== 'e'&& String(n[i]) !== 'o' && String(n[i]) !== 'u' && String(n[i]) !== 'i' ){
           str += String(n[i]) 
        }
    }
if (str.length < 3 ){
   console.log(str + n[1])
}
else if (str.length == 3){
console.log(str)
   }
   else if (str.length > 3){
       console.log(str[0]+str[1]+str[2])
   }
}

check('asem')
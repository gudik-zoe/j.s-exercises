
function firstvocal(m){
    let string ='';
    for (i = 0 ; i<m.length ; i++){
        if ((m[i]) == 'a' || (m[i]) == 'e' || (m[i]) == 'o' || (m[i]) == 'u' || (m[i]) == 'i'  ){
            string += (m[i]) 
         }
    }
   return(string[0])
}

function secondvocal(b){
    let line ='';
    for (i = 0 ; i<b.length ; i++){
        if ((b[i]) == 'a' || (b[i]) == 'e' || (b[i]) == 'o' || (b[i]) == 'u' || (b[i]) == 'i' ){
            line += (b[i]) 
         }
    }
   return(line[1])
}
function check (n) {

    let str = '';
    for ( i = 0 ; i< n.length ; i++ ){
        if ((n[i]) !== 'a' && (n[i]) !== 'e'&& (n[i]) !== 'o' && (n[i]) !== 'u' && (n[i]) !== 'i' ){
           str += (n[i]) 
           
        }
    }
    if (n.length == 2 && str.length == 1){
        console.log(str + firstvocal(n)+'x')
    }
  else   if (str.length == 1){
        console.log(str + firstvocal(n)+secondvocal(n))
    }
    

   else  if (str.length == 2 ){
        console.log(str + firstvocal(n))
    }
    else if (str.length == 3){
        console.log(str)
   }
   else if (str.length > 3){
       console.log(str[0]+str[1]+str[2])
   }
}

check('bo')

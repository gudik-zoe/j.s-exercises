let firstName = 'antoine'  ;
let lastName = 'khoury' ;
function firstvocal(m){
    let string ='';
    for (i = 0 ; i<m.length ; i++){
        if (String(m[i]) == 'a' || String(m[i]) == 'e' || String(m[i]) == 'o' || String(m[i]) == 'u' || String(m[i]) == 'i' ){
            string += String(m[i]) 
         }
    }
   return(string[0])
}

function secondvocal(b){
    let line ='';
    for (i = 0 ; i<b.length ; i++){
        if (String(b[i]) == 'a' || String(b[i]) == 'e' || String(b[i]) == 'o' || String(b[i]) == 'u' || String(b[i]) == 'i' ){
            line += String(b[i]) 
         }
    }
   return(line[1])
}




 function check (n) {
    let str = '';
    for ( i = 0 ; i< n.length ; i++ ){
        if (String(n[i]) !== 'a' && String(n[i]) !== 'e'&& String(n[i]) !== 'o' && String(n[i]) !== 'u' && String(n[i]) !== 'i' ){
           str += String(n[i]) 
        }
    }

    if (str.length == 1){
        return(str + firstvocal(n)+secondvocal(n))
    }

   else  if (str.length == 2 ){
        return(str + firstvocal(n))
    }
    else if (str.length == 3){
        return(str)
   }
   else if (str.length > 3){
       return(str[0]+str[1]+str[2])
   }
   
}
let year =  1994 ;
styear= String(year);

let sex = 'm' ;
let dayOfBirth = 10  ;
if (sex === 'f'){
     dayOfBirth += 40;
}
else if (sex === 'm'){
     dayOfBirth = dayOfBirth
}



let month = 'january' ;

if (month ==='january') {
    month = 'A'
}
else if (month ==='february'){
    month ='B'
}
else if (month ==='march'){
    month ='C'
}
else if (month ==='april'){
    month ='D'
}
else if (month ==='may'){
    month ='E'
}
else if (month ==='june'){
    month ='H'
}
else if (month === 'july'){
    month ='L'
}
else if (month ==='august'){
    month ='M'
}
else if (month ==='september'){
    month ='P'
}
else if (month ==='october'){
    month ='R'
 }
 else if (month ==='october'){
     month ='S'
 }
 else if (month ==='november'){
     month ='S'
 }
 else if (month ==='december'){
     month ='T'
 }

let comune = 'Z240' ; // a letter and a 3 digits number
let codiceControllo = 'Q'  ; // a letter

console.log (check(lastName) + check(firstName) + styear[2]+ styear[3]+  month + dayOfBirth + comune + codiceControllo)
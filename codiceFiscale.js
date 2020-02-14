
let firstName = 'sas';
let name = firstName.toUpperCase();

let lastName ='ghani';
let sureName = lastName.toUpperCase();
function firstvocal(m){
    let string ='';
    for (let i = 0 ; i<m.length ; i++){
        if (String(m[i]) == 'A' || String(m[i]) == 'E' || String(m[i]) == 'O' || String(m[i]) == 'U' || String(m[i]) == 'I' ){
            string += String(m[i]) 
         }
    }
   return(string[0])
}

function secondvocal(b){
    let line ='';
    for (let i = 0 ; i<b.length ; i++){
        if (String(b[i]) == 'A' || String(b[i]) == 'E' || String(b[i]) == 'O' || String(b[i]) == 'U' || String(b[i]) == 'I' ){
            line += String(b[i]) 
         }
    }
   return(line[1])
}

 function check (n) {
    let str = '';
    for (let i = 0 ; i< n.length ; i++ ){
        if (String(n[i]) !== 'A' && String(n[i]) !== 'E'&& String(n[i]) !== 'O' && String(n[i]) !== 'U' && String(n[i]) !== 'I'&& String(n[i]) !== ' ' ){
           str += String(n[i]) 
        }
    }

    if (str.length == 1 ){
        return(str + firstvocal(n)+secondvocal(n))
    }
    else if (str.length == 4  && str[1] == str[2] && str[0] !== str[1]){
        return (str[0]+str[2]+str[3])
    }
else if (n.length == 3 && str.length == 2 && )
   
    else if (str.length == 2 && str[0] === str[1]){
        return(str[0]+ firstvocal(n)+'X')
    }
    else if (str.length == 3 && str[0] === str[1] && str[1]=== str[2]){
        return (str[0]+firstvocal(n)+str[1])
    }
    else if (str.length == 3 && str[0] == str[1]){
        return (str[0]+str[2]+firstvocal(n))
    }
 
    else if ( str.length == 3 && str[0] !== str[1]){
        return(str)
   }
  
  

   else if (str.length > 3 && str[0] != str[1]){
       return(str[0]+str[1]+str[2])
   }
   else if (str.length > 3 && str[0] === str[1] && str[1] !== str[2]){
       return (str[0]+ str[2]+ str[3])
   }
   
   
}
let year =  1995 ;
let styear= String(year);

let sex = 'm' ;
let dayOfBirth = '10'  ;
if (sex === 'f'){
     dayOfBirth += 40;
}
else if (sex === 'm'){
     dayOfBirth == dayOfBirth
}

let countryOfBirth = 'syria';
if (countryOfBirth !== 'italy'){
   var  cob = 'Z' 
}
else if (countryOfBirth == 'italy'){
  var  cob = 'I'
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


let comune = cob +'240' ; // a letter and a 3 digits number
let codiceControllo = 'Q'  ; // a letter

 console.log (check(sureName) + check(name) + styear[2]+ styear[3]+  month + dayOfBirth + comune + codiceControllo)
 

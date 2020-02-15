alert(` let's play a game 
i'm gonna try to guess your name by asking you some questions
pay attention and press ok to start`)
let quest1 = prompt (`can you see your name's first letter?
if yes type  yes otherwise type no 

A   F   G
H   I   R
S   T   U
V   W   K
J`)
if (quest1 == 'yes' ){
     l1 =  'a';
}
else if (quest1 =='no'){
  l1= '';
}
let quest2 = prompt (`can you see your name's first letter?
if yes type yes otherwise type no 

B   F   L
M   N   R
S   T   X
Z   K   J`)
if (quest2 == 'yes'){
      l2 = 'b';
}
else if (quest2 =='no'){
  l2 = '';
}
let quest3 = prompt (`can you see your names first letter?
if yes type yes otherwise type no

C   G   L
O   P   R
U   V   X
K   J   Y`)
if (quest3 == 'yes'){
  l3 =  'c';
}
else if (quest3 =='no'){
  l3 ='';
}
let quest4 = prompt (`can you see your names first letter?
if yes type yes otherwise type no 

D   H   O
M   S   U
W   X   Z
K   J   Q
Y`)
if (quest4 == 'yes'){
  l4 =  'd';
}
else if (quest4 =='no'){
  l4 =' ';
}
let quest5 = prompt (`can you see your names first letter?
if yes type yes otherwise type no 

E   I   N
P   Q   T
V   W   Z
J   Y`)
if (quest5 == 'yes'){
  l5 =  'e';
}
else if (quest5 =='no'){
  l5 =' ';
}
 if(quest1 == 'yes' && quest2 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l6 ='f'
 }
 else {
   l6 = ' '
 }
 if(quest1 == 'yes' && quest3 == 'yes'){
  l1 = ' '
  l3 = ' ' 
  l7 ='g'
 }
 else {
   l7 = ' '
 }
 if(quest1 == 'yes' && quest4 == 'yes'){
  l1 = ' '
  l4 = ' ' 
  l8 ='h'
 }
 else {
   l8 = ' '
 }
 if(quest1 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l5 = ' ' 
  l9 ='i'
 }
 else {
   l9 = ' '
 }
 if(quest2 == 'yes' && quest3 == 'yes'){
  l2 = ' '
  l3 = ' ' 
  l10 ='l'
 }
 else {
   l10 = ' '
 }
 if(quest2 == 'yes' && quest4 == 'yes'){
  l2 = ' '
  l4 = ' ' 
  l11 ='m'
 }
 else {
   l11 = ' '
 }
 if(quest2 == 'yes' && quest5 == 'yes'){
  l2 = ' '
  l5 = ' ' 
  l12 ='n'
 }
 else {
   l12 = ' '
 }
 if(quest3 == 'yes' && quest4 == 'yes'){
  l3 = ' '
  l4 = ' ' 
  l13 ='o'
 }
 else {
   l13 = ' '
 }
 if(quest3 == 'yes' && quest5 == 'yes'){
  l3 = ' '
  l5 = ' ' 
  l14 ='p'
 }
 else {
   l14 = ' '
 }
 if(quest4 == 'yes' && quest5 == 'yes'){
  l4 = ' '
  l5 = ' ' 
  l15 ='q'
 }
 else {
   l15 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
  l1 =' '
  l2 =' ' 
  l3 =' '
  l6 =' '
  l7 =' '
  l10 =' '
  l16= 'r'
 }
 else {
   l16 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l4 =' '
  l6 =' '
  l8 = ' '
  l13 =' '
  l11 =' '
  l17= 's'
 }
 else {
   l17 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l5 =' '
  l6 = ' '
  l9 = ' '
  l12 =' '
  l18= 't'
 }
 else {
   l18 = ' '
 }

 if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
  l1 =''
  l3 ='' 
  l4 =''
  l7 =''
  l8 =''
  l13=''
  l19= 'u'
 }
 else {
   l19 =''
 }
 if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
  l1 =''
  l3 ='' 
  l5 =''
  l7 =''
  l9 = ''
  l14 =''
  l20= 'v'
 }
 else {
   l20 = ' '
 }
 if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l1 =''
  l4 ='' 
  l5 =''
  l8 =''
  l9 =''
  l15 =''
  l21= 'w'
 }
 else {
   l21 =''
 }
 if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
  l2 =''
  l3 ='' 
  l4 =''
  l10 =''
  l11= ''
  l13= ''
  l22= 'x'
 }
 else {
   l22 = ' '
 }
 if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l23='z'
 }
 else { 
   l23 = ' '
 }
 if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l23=''
  l3=' '
  l18 =''
  l20=''
  l21= ''
  l24= ''
  l13=''
  l14=''
  l24 ='y'
 }
 else { 
   l24 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l16=' '
  l1 =' '
  l3= ' '
  l17= ''
  l19= ' '
  l22= ''
  l25='k'
 }
 else { 
   l25 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l16=' '
  l1 =' '
  l3= ' '
  l24=' '
  l25= ''
  l26 = 'j'
 }
 else { 
   l26 = ' '
 }

 
 let firstletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26;
 let first =  firstletter.replace(/ /g, '');
 let tony  = prompt(`now i know your name's first letter!
 to proceed to the second letter type next`)
  if (tony == 'next'){
  
let quest1 = prompt (`can you see your name's (second) letter?

A   F   G
H   I   R
S   T   U
V   W   K
J`)
if (quest1 == 'yes' ){
     l1 =  'a';
}
else if (quest1 =='no'){
  l1= '';
}
let quest2 = prompt (`can you see your name's (second) letter? 

B   F   L
M   N   R
S   T   X
Z   K   J`)
if (quest2 == 'yes'){
      l2 = 'b';
}
else if (quest2 =='no'){
  l2 = '';
}
let quest3 = prompt (`can you see your name's (second) letter?

C   G   L
O   P   R
U   V   X
K   J   Y`)
if (quest3 == 'yes'){
  l3 =  'c';
}
else if (quest3 =='no'){
  l3 ='';
}
let quest4 = prompt (`can you see your name's (second) letter?

D   H   O
M   S   U
W   X   Z
K   J   Q
Y`)
if (quest4 == 'yes'){
  l4 =  'd';
}
else if (quest4 =='no'){
  l4 =' ';
}
let quest5 = prompt (`can you see your name's (second) letter? 

E   I   N
P   Q   T
V   W   Z
J   Y`)
 if (quest5 == 'yes'){
   l5 =  'e';
 }
 else if (quest5 =='no'){
   l5 =' ';
 }
  if(quest1 == 'yes' && quest2 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l6 ='f'
  }
  else {
    l6 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l7 ='g'
  }
  else {
    l7 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l8 ='h'
  }
  else {
    l8 = ' '
  }
  if(quest1 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l5 = ' ' 
   l9 ='i'
  }
  else {
    l9 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l10 ='l'
  }
  else {
    l10 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l11 ='m'
  }
  else {
    l11 = ' '
  }
  if(quest2 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l5 = ' ' 
   l12 ='n'
  }
  else {
    l12 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes'){
   l3 = ' '
   l4 = ' ' 
   l13 ='o'
  }
  else {
    l13 = ' '
  }
  if(quest3 == 'yes' && quest5 == 'yes'){
   l3 = ' '
   l5 = ' ' 
   l14 ='p'
  }
  else {
    l14 = ' '
  }
  if(quest4 == 'yes' && quest5 == 'yes'){
   l4 = ' '
   l5 = ' ' 
   l15 ='q'
  }
  else {
    l15 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
   l1 =' '
   l2 =' ' 
   l3 =' '
   l6 =' '
   l7 =' '
   l10 =' '
   l16= 'r'
  }
  else {
    l16 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l4 =' '
   l6 =' '
   l8 = ' '
   l13 =' '
   l11 =' '
   l17= 's'
  }
  else {
    l17 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l5 =' '
   l6 = ' '
   l9 = ' '
   l12 =' '
   l18= 't'
  }
  else {
    l18 = ' '
  }
 
  if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l4 =' '
   l7 =' '
   l8 = ' '
   l13= ' '
   l19= 'u'
  }
  else {
    l19 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l5 =' '
   l7 = ' '
   l9 = ' '
   l14 = ' '
   l20= 'v'
  }
  else {
    l20 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l5 =' '
   l8 = ' '
   l9 = ' '
   l15 = ' '
   l21= 'w'
  }
  else {
    l21 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l4 =' '
   l10 = ' '
   l11= ' '
   l13= ' '
   l22= 'x'
  }
  else {
    l22 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l5 =' '
   l11 = ' '
   l12 = ' '
   l15 = ' '
   l23= 'z'
  }
  else {
    l23 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l23=''
    l3=' '
    l18 =''
    l20=''
    l21= ''
    l24= ''
    l13=''
    l14=''
    l24 ='y'
   }
   else { 
     l24 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l17= ''
    l19= ' '
    l22= ''
    l25='k'
   }
   else { 
     l25 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l24=' '
    l25= ''
    l26 = 'j'
   }
   else { 
     l26 = ' '
   }
 }
 let secondletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
let second = secondletter.replace(/ /g, '')
let hanna = prompt (`now i know your name's second letter too!
if your name is already completed type done 
if not yet type next to proceed 
`)
if (hanna == 'done'){
  alert ('your name is ' + first + second);
  
}
 else if (hanna == 'next'){
let quest1 = prompt (`can you see your name's third letter? 

A   F   G
H   I   R
S   T   U
V   W   K
J`)
if (quest1 == 'yes' ){
     l1 =  'a';
}
else if (quest1 =='no'){
  l1= '';
}
let quest2 = prompt (`can you see your name's third letter?

B   F   L
M   N   R
S   T   X
Z   K   J`)
if (quest2 == 'yes'){
      l2 = 'b';
}
else if (quest2 =='no'){
  l2 = '';
}
let quest3 = prompt (`can you see your name's third letter? 

C   G   L
O   P   R
U   V   X
K   J   Y`)
if (quest3 == 'yes'){
  l3 =  'c';
}
else if (quest3 =='no'){
  l3 ='';
}
let quest4 = prompt (`can you see your name's third letter? 

D   H   O
M   S   U
W   X   Z
K   J   Q
Y`)
if (quest4 == 'yes'){
  l4 =  'd';
}
else if (quest4 =='no'){
  l4 =' ';
}
let quest5 = prompt (`can you see your name's third letter? 

E   I   N
P   Q   T
V   W   Z
J   Y`)
if (quest5 == 'yes'){
  l5 =  'e';
}
else if (quest5 =='no'){
  l5 =' ';
}

 if(quest1 == 'yes' && quest2 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l6 ='f'
 }
 else {
   l6 = ' '
 }
 if(quest1 == 'yes' && quest3 == 'yes'){
  l1 = ' '
  l3 = ' ' 
  l7 ='g'
 }
 else {
   l7 = ' '
 }
 if(quest1 == 'yes' && quest4 == 'yes'){
  l1 = ' '
  l4 = ' ' 
  l8 ='h'
 }
 else {
   l8 = ' '
 }
 if(quest1 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l5 = ' ' 
  l9 ='i'
 }
 else {
   l9 = ' '
 }
 if(quest2 == 'yes' && quest3 == 'yes'){
  l2 = ' '
  l3 = ' ' 
  l10 ='l'
 }
 else {
   l10 = ' '
 }
 if(quest2 == 'yes' && quest4 == 'yes'){
  l2 = ' '
  l4 = ' ' 
  l11 ='m'
 }
 else {
   l11 = ' '
 }
 if(quest2 == 'yes' && quest5 == 'yes'){
  l2 = ' '
  l5 = ' ' 
  l12 ='n'
 }
 else {
   l12 = ' '
 }
 if(quest3 == 'yes' && quest4 == 'yes'){
  l3 = ' '
  l4 = ' ' 
  l13 ='o'
 }
 else {
   l13 = ' '
 }
 if(quest3 == 'yes' && quest5 == 'yes'){
  l3 = ' '
  l5 = ' ' 
  l14 ='p'
 }
 else {
   l14 = ' '
 }
 if(quest4 == 'yes' && quest5 == 'yes'){
  l4 = ' '
  l5 = ' ' 
  l15 ='q'
 }
 else {
   l15 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
  l1 =' '
  l2 =' ' 
  l3 =' '
  l6 =' '
  l7 =' '
  l10 =' '
  l16= 'r'
 }
 else {
   l16 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l4 =' '
  l6 =' '
  l8 = ' '
  l13 =' '
  l11 =' '
  l17= 's'
 }
 else {
   l17 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l2 = ' ' 
  l5 =' '
  l6 = ' '
  l9 = ' '
  l12 =' '
  l18= 't'
 }
 else {
   l18 = ' '
 }

 if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
  l1 = ' '
  l3 = ' ' 
  l4 =' '
  l7 =' '
  l8 = ' '
  l13= ' '
  l19= 'u'
 }
 else {
   l19 = ' '
 }
 if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l3 = ' ' 
  l5 =' '
  l7 = ' '
  l9 = ' '
  l14 = ' '
  l20= 'v'
 }
 else {
   l20 = ' '
 }
 if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l1 = ' '
  l4 = ' ' 
  l5 =' '
  l8 = ' '
  l9 = ' '
  l15 = ' '
  l21= 'w'
 }
 else {
   l21 = ' '
 }
 if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
  l2 = ' '
  l3 = ' ' 
  l4 =' '
  l10 = ' '
  l11= ' '
  l13= ' '
  l22= 'x'
 }
 else {
   l22 = ' '
 }
 if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l2 = ' '
  l4 = ' ' 
  l5 =' '
  l11 = ' '
  l12 = ' '
  l15 = ' '
  l23= 'z'
 }
 else {
   l23 = ' '
 }
 if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l23=''
  l3=' '
  l18 =''
  l20=''
  l21= ''
  l24= ''
  l13=''
  l14=''
  l24 ='y'
 }
 else { 
   l24 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l16=' '
  l1 =' '
  l3= ' '
  l17= ''
  l19= ' '
  l22= ''
  l25='k'
 }
 else { 
   l25 = ' '
 }
 if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
  l2 = ''
  l4 = '' 
  l5 =''
  l11 =''
  l12 =''
  l15 =''
  l16=' '
  l1 =' '
  l3= ' '
  l24=' '
  l25= ''
  l26 = 'j'
 }
 else { 
   l26 = ' '
 }
}

let thirdletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
let third = thirdletter.replace(/ /g,'');
let maha = prompt(`now i know the first three letters of your name!
if your name is completed type done
otherwise type next to proceed to the fourthletter`)
if (maha === 'done'){
   alert('your name is ' + first  + second + third)
}
else if (maha == 'next') {
 
let quest1 = prompt (`can you see your name's fourth letter?

A   F   G
H   I   R
S   T   U
V   W   K
J`)
if (quest1 == 'yes' ){
     l1 =  'a';
}
else if (quest1 =='no'){
  l1= '';
}
let quest2 = prompt (`can you see your name's fourth letter?

B   F   L
M   N   R
S   T   X
Z   K   J`)
if (quest2 == 'yes'){
      l2 = 'b';
}
else if (quest2 =='no'){
  l2 = '';
}
let quest3 = prompt (`can you see your name's fourth letter? 

C   G   L
O   P   R
U   V   X
K   J   Y`)
if (quest3 == 'yes'){
  l3 =  'c';
}
else if (quest3 =='no'){
  l3 ='';
}
let quest4 = prompt (`can you see your name's fourth letter?

D   H   O
M   S   U
W   X   Z
K   J   Q
Y`)
if (quest4 == 'yes'){
  l4 =  'd';
}
else if (quest4 =='no'){
  l4 =' ';
}
let quest5 = prompt (`can you see your name's fourth letter?

E   I   N
P   Q   T
V   W   Z
J   Y`)
if (quest5 == 'yes'){
  l5 =  'e';
}
else if (quest5 == 'no'){
  l5 = ''
}
if(quest1 == 'yes' && quest2 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l6 ='f'
  }
  else {
    l6 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l7 ='g'
  }
  else {
    l7 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l8 ='h'
  }
  else {
    l8 = ' '
  }
  if(quest1 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l5 = ' ' 
   l9 ='i'
  }
  else {
    l9 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l10 ='l'
  }
  else {
    l10 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l11 ='m'
  }
  else {
    l11 = ' '
  }
  if(quest2 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l5 = ' ' 
   l12 ='n'
  }
  else {
    l12 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes'){
   l3 = ' '
   l4 = ' ' 
   l13 ='o'
  }
  else {
    l13 = ' '
  }
  if(quest3 == 'yes' && quest5 == 'yes'){
   l3 = ' '
   l5 = ' ' 
   l14 ='p'
  }
  else {
    l14 = ' '
  }
  if(quest4 == 'yes' && quest5 == 'yes'){
   l4 = ' '
   l5 = ' ' 
   l15 ='q'
  }
  else {
    l15 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
   l1 =' '
   l2 =' ' 
   l3 =' '
   l6 =' '
   l7 =' '
   l10 =' '
   l16= 'r'
  }
  else {
    l16 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l4 =' '
   l6 =' '
   l8 = ' '
   l13 =' '
   l11 =' '
   l17= 's'
  }
  else {
    l17 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l5 =' '
   l6 = ' '
   l9 = ' '
   l12 =' '
   l18= 't'
  }
  else {
    l18 = ' '
  }
 
  if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l4 =' '
   l7 =' '
   l8 = ' '
   l13= ' '
   l19= 'u'
  }
  else {
    l19 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l5 =' '
   l7 = ' '
   l9 = ' '
   l14 = ' '
   l20= 'v'
  }
  else {
    l20 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l5 =' '
   l8 = ' '
   l9 = ' '
   l15 = ' '
   l21= 'w'
  }
  else {
    l21 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l4 =' '
   l10 = ' '
   l11= ' '
   l13= ' '
   l22= 'x'
  }
  else {
    l22 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l5 =' '
   l11 = ' '
   l12 = ' '
   l15 = ' '
   l23= 'z'
  }
  else {
    l23 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l23=''
    l3=' '
    l18 =''
    l20=''
    l21= ''
    l24= ''
    l13=''
    l14=''
    l24 ='y'
   }
   else { 
     l24 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l17= ''
    l19= ' '
    l22= ''
    l25='k'
   }
   else { 
     l25 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l24=' '
    l25= ''
    l26 = 'j'
   }
   else { 
     l26 = ' '
   }
  
}
let fourthLetter = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
let fourth = fourthLetter.replace(/ /g, '');
let riad = prompt(`now i know your name's  fourth letter! 
if your name is completed type done 
if not yet type next`) ;
if (riad ==='done'){
   alert('your name is ' + first + second + third + fourth)
}
else if (riad == 'next'){
  let quest1 = prompt (`can you see your name's fifth letter?

A   F   G
H   I   R
S   T   U
V   W   K
J`)
if (quest1 == 'yes' ){
     l1 =  'a';
}
else if (quest1 =='no'){
  l1= '';
}
let quest2 = prompt (`can you see your name's fifth letter? 

B   F   L
M   N   R
S   T   X
Z   K   J`)
if (quest2 == 'yes'){
      l2 = 'b';
}
else if (quest2 =='no'){
  l2 = '';
}
let quest3 = prompt (`can you see your name's fifth letter?

C   G   L
O   P   R
U   V   X
K   J   Y`)
if (quest3 == 'yes'){
  l3 =  'c';
}
else if (quest3 =='no'){
  l3 ='';
}
let quest4 = prompt (`can you see your name's fifth letter?

D   H   O
M   S   U
W   X   Z
K   J   Q
Y`)
if (quest4 == 'yes'){
  l4 =  'd';
}
else if (quest4 =='no'){
  l4 =' ';
}
let quest5 = prompt (`can you see your name's fifth letter?

E   I   N
P   Q   T
V   W   Z
J   Y`)
if (quest5 == 'yes'){
  l5 =  'e';
}
else if (quest5 == 'no'){
  l5 = ''
}
if(quest1 == 'yes' && quest2 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l6 ='f'
  }
  else {
    l6 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l7 ='g'
  }
  else {
    l7 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l8 ='h'
  }
  else {
    l8 = ' '
  }
  if(quest1 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l5 = ' ' 
   l9 ='i'
  }
  else {
    l9 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l10 ='l'
  }
  else {
    l10 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l11 ='m'
  }
  else {
    l11 = ' '
  }
  if(quest2 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l5 = ' ' 
   l12 ='n'
  }
  else {
    l12 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes'){
   l3 = ' '
   l4 = ' ' 
   l13 ='o'
  }
  else {
    l13 = ' '
  }
  if(quest3 == 'yes' && quest5 == 'yes'){
   l3 = ' '
   l5 = ' ' 
   l14 ='p'
  }
  else {
    l14 = ' '
  }
  if(quest4 == 'yes' && quest5 == 'yes'){
   l4 = ' '
   l5 = ' ' 
   l15 ='q'
  }
  else {
    l15 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
   l1 =' '
   l2 =' ' 
   l3 =' '
   l6 =' '
   l7 =' '
   l10 =' '
   l16= 'r'
  }
  else {
    l16 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l4 =' '
   l6 =' '
   l8 = ' '
   l13 =' '
   l11 =' '
   l17= 's'
  }
  else {
    l17 = ' '
  }
  if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l2 = ' ' 
   l5 =' '
   l6 = ' '
   l9 = ' '
   l12 =' '
   l18= 't'
  }
  else {
    l18 = ' '
  }
 
  if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l4 =' '
   l7 =' '
   l8 = ' '
   l13= ' '
   l19= 'u'
  }
  else {
    l19 = ' '
  }
  if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l3 = ' ' 
   l5 =' '
   l7 = ' '
   l9 = ' '
   l14 = ' '
   l20= 'v'
  }
  else {
    l20 = ' '
  }
  if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l1 = ' '
   l4 = ' ' 
   l5 =' '
   l8 = ' '
   l9 = ' '
   l15 = ' '
   l21= 'w'
  }
  else {
    l21 = ' '
  }
  if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
   l2 = ' '
   l3 = ' ' 
   l4 =' '
   l10 = ' '
   l11= ' '
   l13= ' '
   l22= 'x'
  }
  else {
    l22 = ' '
  }
  if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
   l2 = ' '
   l4 = ' ' 
   l5 =' '
   l11 = ' '
   l12 = ' '
   l15 = ' '
   l23= 'z'
  }
  else {
    l23 = ' '
  }
  if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l23=''
    l3=' '
    l18 =''
    l20=''
    l21= ''
    l24= ''
    l13=''
    l14=''
    l24 ='y'
   }
   else { 
     l24 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l17= ''
    l19= ' '
    l22= ''
    l25='k'
   }
   else { 
     l25 = ' '
   }
   if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
    l2 = ''
    l4 = '' 
    l5 =''
    l11 =''
    l12 =''
    l15 =''
    l16=' '
    l1 =' '
    l3= ' '
    l24=' '
    l25= ''
    l26 = 'j'
   }
   else { 
     l26 = ' '
   }
  
}
let fifthletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
let fifth = fifthletter.replace(/ /g,'')
let family = prompt (`now i know your name's fifth letter!
if your name is completed type done 
otherwise type next to proceed to the sixth letter`)
if (family == 'done'){
  alert('your name is ' + first + second + third + fourth + fifth)
}
else if (family == 'next'){
  let quest1 = prompt (`can you see your name's sixth letter? 

  A   F   G
  H   I   R
  S   T   U
  V   W   K
  J`)
  if (quest1 == 'yes' ){
       l1 =  'a';
  }
  else if (quest1 =='no'){
    l1= '';
  }
  let quest2 = prompt (`can you see your name's sixth letter?

  B   F   L
  M   N   R
  S   T   X
  Z   K   J`)
  if (quest2 == 'yes'){
        l2 = 'b';
  }
  else if (quest2 =='no'){
    l2 = '';
  }
  let quest3 = prompt (`can you see your name's sixth letter?

  C   G   L
  O   P   R
  U   V   X
  K   J   Y`)
  if (quest3 == 'yes'){
    l3 =  'c';
  }
  else if (quest3 =='no'){
    l3 ='';
  }
  let quest4 = prompt (`can you see your name's sixth letter?
  
  D   H   O
  M   S   U
  W   X   Z
  K   J   Q
  Y`)
  if (quest4 == 'yes'){
    l4 =  'd';
  }
  else if (quest4 =='no'){
    l4 =' ';
  }
  let quest5 = prompt (`can you see your name's sixth letter? 

  E   I   N
  P   Q   T
  V   W   Z
  J   Y`)
  if (quest5 == 'yes'){
    l5 =  'e';
  }
  else if (quest5 == 'no'){
    l5 = ''
  }
  if(quest1 == 'yes' && quest2 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l6 ='f'
    }
    else {
      l6 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l7 ='g'
    }
    else {
      l7 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l8 ='h'
    }
    else {
      l8 = ' '
    }
    if(quest1 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l5 = ' ' 
     l9 ='i'
    }
    else {
      l9 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l10 ='l'
    }
    else {
      l10 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l11 ='m'
    }
    else {
      l11 = ' '
    }
    if(quest2 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l5 = ' ' 
     l12 ='n'
    }
    else {
      l12 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes'){
     l3 = ' '
     l4 = ' ' 
     l13 ='o'
    }
    else {
      l13 = ' '
    }
    if(quest3 == 'yes' && quest5 == 'yes'){
     l3 = ' '
     l5 = ' ' 
     l14 ='p'
    }
    else {
      l14 = ' '
    }
    if(quest4 == 'yes' && quest5 == 'yes'){
     l4 = ' '
     l5 = ' ' 
     l15 ='q'
    }
    else {
      l15 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
     l1 =' '
     l2 =' ' 
     l3 =' '
     l6 =' '
     l7 =' '
     l10 =' '
     l16= 'r'
    }
    else {
      l16 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l4 =' '
     l6 =' '
     l8 = ' '
     l13 =' '
     l11 =' '
     l17= 's'
    }
    else {
      l17 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l5 =' '
     l6 = ' '
     l9 = ' '
     l12 =' '
     l18= 't'
    }
    else {
      l18 = ' '
    }
   
    if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l4 =' '
     l7 =' '
     l8 = ' '
     l13= ' '
     l19= 'u'
    }
    else {
      l19 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l5 =' '
     l7 = ' '
     l9 = ' '
     l14 = ' '
     l20= 'v'
    }
    else {
      l20 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l5 =' '
     l8 = ' '
     l9 = ' '
     l15 = ' '
     l21= 'w'
    }
    else {
      l21 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l4 =' '
     l10 = ' '
     l11= ' '
     l13= ' '
     l22= 'x'
    }
    else {
      l22 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l5 =' '
     l11 = ' '
     l12 = ' '
     l15 = ' '
     l23= 'z'
    }
    else {
      l23 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l23=''
      l3=' '
      l18 =''
      l20=''
      l21= ''
      l24= ''
      l13=''
      l14=''
      l24 ='y'
     }
     else { 
       l24 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l17= ''
      l19= ' '
      l22= ''
      l25='k'
     }
     else { 
       l25 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l24=' '
      l25= ''
      l26 = 'j'
     }
     else { 
       l26 = ' '
     } 
  }
let sixthletter = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ; 
let sixth = sixthletter.replace(/ /g,'');
let khoury = prompt (`now i know your name's sixth letter!
if your name is completed type done
othwerwise type next `)
 if (khoury == 'done'){
   alert('your name is ' + first + second + third + fourth + fifth + sixth)
 }
 else if (khoury == 'next'){
  let quest1 = prompt (`can you see your name's sixth letter? 

  A   F   G
  H   I   R
  S   T   U
  V   W   K
  J`)
  if (quest1 == 'yes' ){
       l1 =  'a';
  }
  else if (quest1 =='no'){
    l1= '';
  }
  let quest2 = prompt (`can you see your name's sixth letter?

  B   F   L
  M   N   R
  S   T   X
  Z   K   J`)
  if (quest2 == 'yes'){
        l2 = 'b';
  }
  else if (quest2 =='no'){
    l2 = '';
  }
  let quest3 = prompt (`can you see your name's sixth letter?

  C   G   L
  O   P   R
  U   V   X
  K   J   Y`)
  if (quest3 == 'yes'){
    l3 =  'c';
  }
  else if (quest3 =='no'){
    l3 ='';
  }
  let quest4 = prompt (`can you see your name's sixth letter?
  
  D   H   O
  M   S   U
  W   X   Z
  K   J   Q
  Y`)
  if (quest4 == 'yes'){
    l4 =  'd';
  }
  else if (quest4 =='no'){
    l4 =' ';
  }
  let quest5 = prompt (`can you see your name's sixth letter? 

  E   I   N
  P   Q   T
  V   W   Z
  J   Y`)
  if (quest5 == 'yes'){
    l5 =  'e';
  }
  else if (quest5 == 'no'){
    l5 = ''
  }
  if(quest1 == 'yes' && quest2 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l6 ='f'
    }
    else {
      l6 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l7 ='g'
    }
    else {
      l7 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l8 ='h'
    }
    else {
      l8 = ' '
    }
    if(quest1 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l5 = ' ' 
     l9 ='i'
    }
    else {
      l9 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l10 ='l'
    }
    else {
      l10 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l11 ='m'
    }
    else {
      l11 = ' '
    }
    if(quest2 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l5 = ' ' 
     l12 ='n'
    }
    else {
      l12 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes'){
     l3 = ' '
     l4 = ' ' 
     l13 ='o'
    }
    else {
      l13 = ' '
    }
    if(quest3 == 'yes' && quest5 == 'yes'){
     l3 = ' '
     l5 = ' ' 
     l14 ='p'
    }
    else {
      l14 = ' '
    }
    if(quest4 == 'yes' && quest5 == 'yes'){
     l4 = ' '
     l5 = ' ' 
     l15 ='q'
    }
    else {
      l15 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
     l1 =' '
     l2 =' ' 
     l3 =' '
     l6 =' '
     l7 =' '
     l10 =' '
     l16= 'r'
    }
    else {
      l16 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l4 =' '
     l6 =' '
     l8 = ' '
     l13 =' '
     l11 =' '
     l17= 's'
    }
    else {
      l17 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l5 =' '
     l6 = ' '
     l9 = ' '
     l12 =' '
     l18= 't'
    }
    else {
      l18 = ' '
    }
   
    if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l4 =' '
     l7 =' '
     l8 = ' '
     l13= ' '
     l19= 'u'
    }
    else {
      l19 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l5 =' '
     l7 = ' '
     l9 = ' '
     l14 = ' '
     l20= 'v'
    }
    else {
      l20 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l5 =' '
     l8 = ' '
     l9 = ' '
     l15 = ' '
     l21= 'w'
    }
    else {
      l21 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l4 =' '
     l10 = ' '
     l11= ' '
     l13= ' '
     l22= 'x'
    }
    else {
      l22 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l5 =' '
     l11 = ' '
     l12 = ' '
     l15 = ' '
     l23= 'z'
    }
    else {
      l23 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l23=''
      l3=' '
      l18 =''
      l20=''
      l21= ''
      l24= ''
      l13=''
      l14=''
      l24 ='y'
     }
     else { 
       l24 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l17= ''
      l19= ' '
      l22= ''
      l25='k'
     }
     else { 
       l25 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l24=' '
      l25= ''
      l26 = 'j'
     }
     else { 
       l26 = ' '
     } 
  }
  let seventhletter  = l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
  let seventh = seventhletter.replace(/ /g,'');
  let dahine = prompt(`now i know your name's seventh letter!
  if your name is completed type done 
  otherwise type next to proceed to the next letter`) 
  if (dahine == 'done'){
    alert ('your name is ' + first + second + third + fourth + fifth + sixth + seventh)
  }
  else if (dahine == 'next'){
    let quest1 = prompt (`can you see your name's sixth letter? 

  A   F   G
  H   I   R
  S   T   U
  V   W   K
  J`)
  if (quest1 == 'yes' ){
       l1 =  'a';
  }
  else if (quest1 =='no'){
    l1= '';
  }
  let quest2 = prompt (`can you see your name's sixth letter?

  B   F   L
  M   N   R
  S   T   X
  Z   K   J`)
  if (quest2 == 'yes'){
        l2 = 'b';
  }
  else if (quest2 =='no'){
    l2 = '';
  }
  let quest3 = prompt (`can you see your name's sixth letter?

  C   G   L
  O   P   R
  U   V   X
  K   J   Y`)
  if (quest3 == 'yes'){
    l3 =  'c';
  }
  else if (quest3 =='no'){
    l3 ='';
  }
  let quest4 = prompt (`can you see your name's sixth letter?
  
  D   H   O
  M   S   U
  W   X   Z
  K   J   Q
  Y`)
  if (quest4 == 'yes'){
    l4 =  'd';
  }
  else if (quest4 =='no'){
    l4 =' ';
  }
  let quest5 = prompt (`can you see your name's sixth letter? 

  E   I   N
  P   Q   T
  V   W   Z
  J   Y`)
  if (quest5 == 'yes'){
    l5 =  'e';
  }
  else if (quest5 == 'no'){
    l5 = ''
  }
  if(quest1 == 'yes' && quest2 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l6 ='f'
    }
    else {
      l6 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l7 ='g'
    }
    else {
      l7 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l8 ='h'
    }
    else {
      l8 = ' '
    }
    if(quest1 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l5 = ' ' 
     l9 ='i'
    }
    else {
      l9 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l10 ='l'
    }
    else {
      l10 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l11 ='m'
    }
    else {
      l11 = ' '
    }
    if(quest2 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l5 = ' ' 
     l12 ='n'
    }
    else {
      l12 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes'){
     l3 = ' '
     l4 = ' ' 
     l13 ='o'
    }
    else {
      l13 = ' '
    }
    if(quest3 == 'yes' && quest5 == 'yes'){
     l3 = ' '
     l5 = ' ' 
     l14 ='p'
    }
    else {
      l14 = ' '
    }
    if(quest4 == 'yes' && quest5 == 'yes'){
     l4 = ' '
     l5 = ' ' 
     l15 ='q'
    }
    else {
      l15 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
     l1 =' '
     l2 =' ' 
     l3 =' '
     l6 =' '
     l7 =' '
     l10 =' '
     l16= 'r'
    }
    else {
      l16 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l4 =' '
     l6 =' '
     l8 = ' '
     l13 =' '
     l11 =' '
     l17= 's'
    }
    else {
      l17 = ' '
    }
    if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l2 = ' ' 
     l5 =' '
     l6 = ' '
     l9 = ' '
     l12 =' '
     l18= 't'
    }
    else {
      l18 = ' '
    }
   
    if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l4 =' '
     l7 =' '
     l8 = ' '
     l13= ' '
     l19= 'u'
    }
    else {
      l19 = ' '
    }
    if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l3 = ' ' 
     l5 =' '
     l7 = ' '
     l9 = ' '
     l14 = ' '
     l20= 'v'
    }
    else {
      l20 = ' '
    }
    if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l1 = ' '
     l4 = ' ' 
     l5 =' '
     l8 = ' '
     l9 = ' '
     l15 = ' '
     l21= 'w'
    }
    else {
      l21 = ' '
    }
    if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
     l2 = ' '
     l3 = ' ' 
     l4 =' '
     l10 = ' '
     l11= ' '
     l13= ' '
     l22= 'x'
    }
    else {
      l22 = ' '
    }
    if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
     l2 = ' '
     l4 = ' ' 
     l5 =' '
     l11 = ' '
     l12 = ' '
     l15 = ' '
     l23= 'z'
    }
    else {
      l23 = ' '
    }
    if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l23=''
      l3=' '
      l18 =''
      l20=''
      l21= ''
      l24= ''
      l13=''
      l14=''
      l24 ='y'
     }
     else { 
       l24 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l17= ''
      l19= ' '
      l22= ''
      l25='k'
     }
     else { 
       l25 = ' '
     }
     if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
      l2 = ''
      l4 = '' 
      l5 =''
      l11 =''
      l12 =''
      l15 =''
      l16=' '
      l1 =' '
      l3= ' '
      l24=' '
      l25= ''
      l26 = 'j'
     }
     else { 
       l26 = ' '
     } 
  }

  let eighthletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
  let eighth = eighthletter.replace(/ /g,'');
  let boom = prompt (`now i know your name's eighth letter!
  if your name is completed type done
  other wise type next to proceed`)

  if (boom == 'done'){
    alert ('your name is ' + first + second + third + fourth + fifth + sixth + seventh + eighth)
  }
  else if (boom == 'next'){
    let quest1 = prompt (`can you see your name's sixth letter? 

    A   F   G
    H   I   R
    S   T   U
    V   W   K
    J`)
    if (quest1 == 'yes' ){
         l1 =  'a';
    }
    else if (quest1 =='no'){
      l1= '';
    }
    let quest2 = prompt (`can you see your name's sixth letter?
  
    B   F   L
    M   N   R
    S   T   X
    Z   K   J`)
    if (quest2 == 'yes'){
          l2 = 'b';
    }
    else if (quest2 =='no'){
      l2 = '';
    }
    let quest3 = prompt (`can you see your name's sixth letter?
  
    C   G   L
    O   P   R
    U   V   X
    K   J   Y`)
    if (quest3 == 'yes'){
      l3 =  'c';
    }
    else if (quest3 =='no'){
      l3 ='';
    }
    let quest4 = prompt (`can you see your name's sixth letter?
    
    D   H   O
    M   S   U
    W   X   Z
    K   J   Q
    Y`)
    if (quest4 == 'yes'){
      l4 =  'd';
    }
    else if (quest4 =='no'){
      l4 =' ';
    }
    let quest5 = prompt (`can you see your name's sixth letter? 
  
    E   I   N
    P   Q   T
    V   W   Z
    J   Y`)
    if (quest5 == 'yes'){
      l5 =  'e';
    }
    else if (quest5 == 'no'){
      l5 = ''
    }
    if(quest1 == 'yes' && quest2 == 'yes'){
       l1 = ' '
       l2 = ' ' 
       l6 ='f'
      }
      else {
        l6 = ' '
      }
      if(quest1 == 'yes' && quest3 == 'yes'){
       l1 = ' '
       l3 = ' ' 
       l7 ='g'
      }
      else {
        l7 = ' '
      }
      if(quest1 == 'yes' && quest4 == 'yes'){
       l1 = ' '
       l4 = ' ' 
       l8 ='h'
      }
      else {
        l8 = ' '
      }
      if(quest1 == 'yes' && quest5 == 'yes'){
       l1 = ' '
       l5 = ' ' 
       l9 ='i'
      }
      else {
        l9 = ' '
      }
      if(quest2 == 'yes' && quest3 == 'yes'){
       l2 = ' '
       l3 = ' ' 
       l10 ='l'
      }
      else {
        l10 = ' '
      }
      if(quest2 == 'yes' && quest4 == 'yes'){
       l2 = ' '
       l4 = ' ' 
       l11 ='m'
      }
      else {
        l11 = ' '
      }
      if(quest2 == 'yes' && quest5 == 'yes'){
       l2 = ' '
       l5 = ' ' 
       l12 ='n'
      }
      else {
        l12 = ' '
      }
      if(quest3 == 'yes' && quest4 == 'yes'){
       l3 = ' '
       l4 = ' ' 
       l13 ='o'
      }
      else {
        l13 = ' '
      }
      if(quest3 == 'yes' && quest5 == 'yes'){
       l3 = ' '
       l5 = ' ' 
       l14 ='p'
      }
      else {
        l14 = ' '
      }
      if(quest4 == 'yes' && quest5 == 'yes'){
       l4 = ' '
       l5 = ' ' 
       l15 ='q'
      }
      else {
        l15 = ' '
      }
      if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
       l1 =' '
       l2 =' ' 
       l3 =' '
       l6 =' '
       l7 =' '
       l10 =' '
       l16= 'r'
      }
      else {
        l16 = ' '
      }
      if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
       l1 = ' '
       l2 = ' ' 
       l4 =' '
       l6 =' '
       l8 = ' '
       l13 =' '
       l11 =' '
       l17= 's'
      }
      else {
        l17 = ' '
      }
      if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
       l1 = ' '
       l2 = ' ' 
       l5 =' '
       l6 = ' '
       l9 = ' '
       l12 =' '
       l18= 't'
      }
      else {
        l18 = ' '
      }
     
      if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
       l1 = ' '
       l3 = ' ' 
       l4 =' '
       l7 =' '
       l8 = ' '
       l13= ' '
       l19= 'u'
      }
      else {
        l19 = ' '
      }
      if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
       l1 = ' '
       l3 = ' ' 
       l5 =' '
       l7 = ' '
       l9 = ' '
       l14 = ' '
       l20= 'v'
      }
      else {
        l20 = ' '
      }
      if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
       l1 = ' '
       l4 = ' ' 
       l5 =' '
       l8 = ' '
       l9 = ' '
       l15 = ' '
       l21= 'w'
      }
      else {
        l21 = ' '
      }
      if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
       l2 = ' '
       l3 = ' ' 
       l4 =' '
       l10 = ' '
       l11= ' '
       l13= ' '
       l22= 'x'
      }
      else {
        l22 = ' '
      }
      if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
       l2 = ' '
       l4 = ' ' 
       l5 =' '
       l11 = ' '
       l12 = ' '
       l15 = ' '
       l23= 'z'
      }
      else {
        l23 = ' '
      }
      if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
        l2 = ''
        l4 = '' 
        l5 =''
        l11 =''
        l12 =''
        l15 =''
        l23=''
        l3=' '
        l18 =''
        l20=''
        l21= ''
        l24= ''
        l13=''
        l14=''
        l24 ='y'
       }
       else { 
         l24 = ' '
       }
       if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
        l2 = ''
        l4 = '' 
        l5 =''
        l11 =''
        l12 =''
        l15 =''
        l16=' '
        l1 =' '
        l3= ' '
        l17= ''
        l19= ' '
        l22= ''
        l25='k'
       }
       else { 
         l25 = ' '
       }
       if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
        l2 = ''
        l4 = '' 
        l5 =''
        l11 =''
        l12 =''
        l15 =''
        l16=' '
        l1 =' '
        l3= ' '
        l24=' '
        l25= ''
        l26 = 'j'
       }
       else { 
         l26 = ' '
       } 
    }

    let ninethletter =  l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
    let nineth = ninethletter.replace(/ /g,'');
    let maah = prompt (`now i know your name's nineth letter!
    if your name is completed type done
    otherwise type next to continue `)

    if (maah == 'done'){
      alert ('your name is ' + first + second + third + fourth + fifth + sixth + seventh + eighth + nineth)
    }
    else if (maah == 'next'){
      let quest1 = prompt (`can you see your name's sixth letter? 

      A   F   G
      H   I   R
      S   T   U
      V   W   K
      J`)
      if (quest1 == 'yes' ){
           l1 =  'a';
      }
      else if (quest1 =='no'){
        l1= '';
      }
      let quest2 = prompt (`can you see your name's sixth letter?
    
      B   F   L
      M   N   R
      S   T   X
      Z   K   J`)
      if (quest2 == 'yes'){
            l2 = 'b';
      }
      else if (quest2 =='no'){
        l2 = '';
      }
      let quest3 = prompt (`can you see your name's sixth letter?
    
      C   G   L
      O   P   R
      U   V   X
      K   J   Y`)
      if (quest3 == 'yes'){
        l3 =  'c';
      }
      else if (quest3 =='no'){
        l3 ='';
      }
      let quest4 = prompt (`can you see your name's sixth letter?
      
      D   H   O
      M   S   U
      W   X   Z
      K   J   Q
      Y`)
      if (quest4 == 'yes'){
        l4 =  'd';
      }
      else if (quest4 =='no'){
        l4 =' ';
      }
      let quest5 = prompt (`can you see your name's sixth letter? 
    
      E   I   N
      P   Q   T
      V   W   Z
      J   Y`)
      if (quest5 == 'yes'){
        l5 =  'e';
      }
      else if (quest5 == 'no'){
        l5 = ''
      }
      if(quest1 == 'yes' && quest2 == 'yes'){
         l1 = ' '
         l2 = ' ' 
         l6 ='f'
        }
        else {
          l6 = ' '
        }
        if(quest1 == 'yes' && quest3 == 'yes'){
         l1 = ' '
         l3 = ' ' 
         l7 ='g'
        }
        else {
          l7 = ' '
        }
        if(quest1 == 'yes' && quest4 == 'yes'){
         l1 = ' '
         l4 = ' ' 
         l8 ='h'
        }
        else {
          l8 = ' '
        }
        if(quest1 == 'yes' && quest5 == 'yes'){
         l1 = ' '
         l5 = ' ' 
         l9 ='i'
        }
        else {
          l9 = ' '
        }
        if(quest2 == 'yes' && quest3 == 'yes'){
         l2 = ' '
         l3 = ' ' 
         l10 ='l'
        }
        else {
          l10 = ' '
        }
        if(quest2 == 'yes' && quest4 == 'yes'){
         l2 = ' '
         l4 = ' ' 
         l11 ='m'
        }
        else {
          l11 = ' '
        }
        if(quest2 == 'yes' && quest5 == 'yes'){
         l2 = ' '
         l5 = ' ' 
         l12 ='n'
        }
        else {
          l12 = ' '
        }
        if(quest3 == 'yes' && quest4 == 'yes'){
         l3 = ' '
         l4 = ' ' 
         l13 ='o'
        }
        else {
          l13 = ' '
        }
        if(quest3 == 'yes' && quest5 == 'yes'){
         l3 = ' '
         l5 = ' ' 
         l14 ='p'
        }
        else {
          l14 = ' '
        }
        if(quest4 == 'yes' && quest5 == 'yes'){
         l4 = ' '
         l5 = ' ' 
         l15 ='q'
        }
        else {
          l15 = ' '
        }
        if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes'){
         l1 =' '
         l2 =' ' 
         l3 =' '
         l6 =' '
         l7 =' '
         l10 =' '
         l16= 'r'
        }
        else {
          l16 = ' '
        }
        if(quest1 == 'yes' && quest2 == 'yes' && quest4 == 'yes'){
         l1 = ' '
         l2 = ' ' 
         l4 =' '
         l6 =' '
         l8 = ' '
         l13 =' '
         l11 =' '
         l17= 's'
        }
        else {
          l17 = ' '
        }
        if(quest1 == 'yes' && quest2 == 'yes' && quest5 == 'yes'){
         l1 = ' '
         l2 = ' ' 
         l5 =' '
         l6 = ' '
         l9 = ' '
         l12 =' '
         l18= 't'
        }
        else {
          l18 = ' '
        }
       
        if(quest1 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
         l1 = ' '
         l3 = ' ' 
         l4 =' '
         l7 =' '
         l8 = ' '
         l13= ' '
         l19= 'u'
        }
        else {
          l19 = ' '
        }
        if(quest1 == 'yes' && quest3 == 'yes' && quest5 == 'yes'){
         l1 = ' '
         l3 = ' ' 
         l5 =' '
         l7 = ' '
         l9 = ' '
         l14 = ' '
         l20= 'v'
        }
        else {
          l20 = ' '
        }
        if(quest1 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
         l1 = ' '
         l4 = ' ' 
         l5 =' '
         l8 = ' '
         l9 = ' '
         l15 = ' '
         l21= 'w'
        }
        else {
          l21 = ' '
        }
        if(quest2 == 'yes' && quest3 == 'yes' && quest4 == 'yes'){
         l2 = ' '
         l3 = ' ' 
         l4 =' '
         l10 = ' '
         l11= ' '
         l13= ' '
         l22= 'x'
        }
        else {
          l22 = ' '
        }
        if(quest2 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
         l2 = ' '
         l4 = ' ' 
         l5 =' '
         l11 = ' '
         l12 = ' '
         l15 = ' '
         l23= 'z'
        }
        else {
          l23 = ' '
        }
        if(quest3 == 'yes' && quest4 == 'yes' && quest5 == 'yes'){
          l2 = ''
          l4 = '' 
          l5 =''
          l11 =''
          l12 =''
          l15 =''
          l23=''
          l3=' '
          l18 =''
          l20=''
          l21= ''
          l24= ''
          l13=''
          l14=''
          l24 ='y'
         }
         else { 
           l24 = ' '
         }
         if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes'){
          l2 = ''
          l4 = '' 
          l5 =''
          l11 =''
          l12 =''
          l15 =''
          l16=' '
          l1 =' '
          l3= ' '
          l17= ''
          l19= ' '
          l22= ''
          l25='k'
         }
         else { 
           l25 = ' '
         }
         if(quest1 == 'yes' && quest2 == 'yes' && quest3 == 'yes' &&   quest4 == 'yes' &&   quest5 == 'yes' ){
          l2 = ''
          l4 = '' 
          l5 =''
          l11 =''
          l12 =''
          l15 =''
          l16=' '
          l1 =' '
          l3= ' '
          l24=' '
          l25= ''
          l26 = 'j'
         }
         else { 
           l26 = ' '
         } 
      }
let tenthletter =   l1 + l2 + l3 + l4 + l5 + l6 + l7 + l8 + l9 + l10 + l11 + l12 + l13 + l14 + l15 + l16 + l17 + l18 + l19 + l20 + l21 + l22 + l23 + l24 + l25 + l26 ;
let tenth = tenthletter.replace(/ /g,'');
let end= prompt (`now i know your name's tenth letter!
if your name is completed type done 
if not go play another game`)
if (end == 'done'){
  alert ('your name is ' + first + second + third + fourth + fifth + sixth + seventh + eighth + nineth + tenth)
}
    
  
    
 

 





 





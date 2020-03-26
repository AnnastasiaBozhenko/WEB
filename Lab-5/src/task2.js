
let val = 82 ;
let valArr = String(val).split('');
let res = 0;
for(let i = 0; i < valArr.length; i++){
    res += Number(valArr[i]);
}
if(val%res === 0? console.log('true') : console.log('false'));

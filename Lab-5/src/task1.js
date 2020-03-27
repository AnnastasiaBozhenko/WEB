const person = {
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900"
};
const MALE_GENDER = 'M';
const FEMALE_GENDER = 'F';
const months = { 1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'H', 7: 'L', 8: 'M', 9: 'P', 10: 'R', 11: 'S', 12: 'T' };
const vovelSymbols = ['A', 'E', 'I', 'O', 'U'];

function getIdDob(){
    let dobArr = person.dob.split('/');
    let val = dobArr[2] % 100;
    if( val < 10){
        val = '0'+String(val);
    }
    let dayId;
    switch (person.gender) {
        case MALE_GENDER:
            dobArr[0] < 10 ? dayId = '0' + String(dobArr[0]) : dayId = dobArr[0];
            break;
        case FEMALE_GENDER:
            dayId =  Number(dobArr[0]) + 40;
            break;
    }
    return  val + months[dobArr[1]] + dayId;
}

function getIDName() {
    let consSymbol = person.name.split('').filter( element => ! vovelSymbols.includes( element.toUpperCase() ));
    let idName = [];
    switch (consSymbol.length) {
        case 1:
            var vowelsSymbol = person.name.split('').filter( element =>vovelSymbols.includes( element.toUpperCase() ));
            oneVowels(consSymbol,vowelsSymbol,idName);
            break;
        case 2:
            var vowelsSymbol = person.name.split('').filter( element =>vovelSymbols.includes( element.toUpperCase() ));
            twoVowels(consSymbol,vowelsSymbol,idName);
            break;
        case 3:
            threeVowels(consSymbol,idName);
            break;
        default:
            moreThanThreeConsonants(consSymbol,idName);
    }
    idName = idName.map( element=>{
        return  element.toUpperCase();
    });
    return idName.join('');
}

function getIDSurname() {
    let consSymbol = person.surname.split('').filter( element =>!vovelSymbols.includes( element.toUpperCase()));
    let idSurnameame = [];
    switch (consSymbol.length) {
        case 1:
            var vowelsSymbol = person.surname.split('').filter( element =>vovelSymbols.includes( element.toUpperCase()));
            oneVowels(consSymbol,vowelsSymbol,idSurnameame);
            break;
        case 2:
            var vowelsSymbol = person.surname.split('').filter( element =>vovelSymbols.includes( element.toUpperCase()));
            twoVowels(consSymbol,vowelsSymbol,idSurnameame);
            break;
        default:
            threeVowels(consSymbol,idSurnameame);
    }
    idSurnameame = idSurnameame.map(element=>{
        return  element.toUpperCase();
    });
    return idSurnameame.join('');
}

function oneVowels(consSymbol,vowelsSymbol,idName){
    idName.push(consSymbol[0]);
    idName.push(vowelsSymbol[0]);
    idName.push('X');
}

function twoVowels(consSymbol,vowelsSymbol,idName){
    idName.push(consSymbol[0]);
    idName.push(consSymbol[consSymbol.length-1]);
    idName.push(vowelsSymbol[0]);
}

function threeVowels(consSymbol,idName) {
    for (let i = 0; i < 3; i++) {
        idName.push(consSymbol[i]);
    }
}

function moreThanThreeConsonants(consSymbol,idName) {
    if (consSymbol.length > 3) {
        idName.push(consSymbol[0]);
        idName.push(consSymbol[2]);
        idName.push(consSymbol[3]);
    } else {
        console.log('error');
    }
}
console.log(person.name);

console.log(getIDSurname() + getIDName() + getIdDob())



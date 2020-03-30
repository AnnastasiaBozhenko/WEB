
function additivePersistence(number) {
    let val = String(number).split('');
    let res = 0;
    let count = 0;
    while (true){
        for(let i = 0; i < val.length; i++){
            res += Number(val[i]);
            if (i == val.length-1 ){ console.log("resalt " + res);}

        }
        count++;
        if( res < 10){
            // console.log("resalt " + res);
            console.log("It takes "+ count + ' iterations to reach a single-digit number' );
            return count;
        }
        val = String(res).split('');
        res = 0;
    }
}
function multiplicativePersistence(number) {
    let val = String(number).split('');
    let res = 1;
    let count = 0;
    while (true) {
        for (let i = 0; i < val.length; i++) {
            res *= Number(val[i]);
            if (i == val.length - 1) {
                console.log("resalt " + res);
            }

        }
        count++;
        if (res < 10) {
            // console.log("resalt " + res);
            console.log("It takes " + count + ' iterations to reach a single-digit number');
            return count;
        }
        val = String(res).split('');
        res = 1;
    }
}
console.log("input:1679583");
additivePersistence(1679583);
console.log("4996238671872");
multiplicativePersistence(4996238671872);
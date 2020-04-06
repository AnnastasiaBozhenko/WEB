var text = "dom arigato!";
report("Before defining functions");

function useless(callback) {
    report("In useless function");
    callback + "k"
    return callback();
}

function getText() {
    report("In useless function");
    return text ;
}

report("Before making all the calls");
//
report("After the call have been made");

function report(info){
    console.log(info);
}
assert( useless(function () { return text;}) === text,"The useless function works!" + text )
// assert(useless(getText) + "k" === text,
//     "The useless function works!" + text);

function assert(value, desc){
    value === true ? console.log(desc): console.log("FALSE");
}
// fuction  assert(value, desc){
//     var li = document.createElement("li");
//     li.className = value ? "pass" : "fail" ;
//     li.appendChild(document.createTextNode(desc));
//     document.getElementById("results").appendChild(li);
// }

// Збереження в Local Storage
function save(){
    let enteredName= document.getElementById('Name').value;
    let enteredNumber = document.getElementById('Number').value;
    let enteredDate = document.getElementById('Date').value;
    localStorage.setItem('Name', enteredName);
    localStorage.setItem('Number', enteredNumber)
    localStorage.setItem('Date', enteredDate)
}

function loadInfo(){
    let enteredName = localStorage.getItem('Name');
    let enteredNumber = localStorage.getItem('Number');
    let enteredDate = localStorage.getItem('Date');

    if(enteredName){
        document.getElementById('Name').value = enteredName;
    }
    if( enteredNumber){
        document.getElementById('Number').value = enteredNumber;
    }
    if(enteredDate){
        document.getElementById('Date').value = enteredDate;
    }
}
window.onload = function() {
    let loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        loadInfo();
    } else {
        sessionStorage.setItem('loaded', true);
    }
}

function close(){
    let objMod = document.getElementById('modal');
    objMod.style.display = "none";
    alert("hohoh");
}
let buttonCloseModalClick = document.getElementById('idCloseButton');
buttonCloseModalClick.addEventListener("click",close);
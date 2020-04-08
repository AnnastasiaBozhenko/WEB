var currentImage = 0;
var DEFAULT_IMAGE_URL = 'resource/image/XE.png';
let imgArr = [
    'resource/image/Noragami.jpg',
    'resource/image/SwordArt Online.jpg',
    'resource/image/DeathNote.jpg',
    'resource/image/DeathNote',
    'resource/image/SwordArtOnline.jpg',
    'resource/image/GuiltyCrown.jpg',
// 'resource/image/NoGameNoLife.jpg',
    'resource/image/Parasyte.png',
// 'resource/image/Re.jpg'
];

function  onLoadAddContent() {
    for (let i = 0; i < imgArr.length; i++) {
        let mainContainer = document.getElementById('main-container');
        addImage(mainContainer, i, imgArr[i]);
    }
    hideSpinner();
}

function addImage(element, imgId, imgLink) {
    let parentDiv = document.createElement("div");
    parentDiv.className = "gallery-pills";
    let divContent = document.createElement("img");
    divContent.src = imgLink;
    divContent.onerror = function () {
        divContent.src = DEFAULT_IMAGE_URL;
        imgArr[imgId]=DEFAULT_IMAGE_URL;
    };
    divContent.id = imgId;
    divContent.addEventListener("click", onImageClick);
    divContent.height = 325;
    divContent.width = 250;
    parentDiv.appendChild(divContent);
    element.appendChild(parentDiv);
}

function hideSpinner() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 4000);
}
function onImageClick() {
    let id = this.id;
    let obj = document.getElementById(id);
    console.log(obj.src )
    let objMod = document.getElementById("modal-container");
    console.log(objMod)
    objMod.style.backgroundImage = "url(" + obj.src + ")";
    objMod.onerror = function () {
        objMod.style.backgroundImage = "url(" + this.DEFAULT_IMAGE_URL + ")"
    };
    objMod.className = 'one';
    objMod.style.display = "block";
    currentImage = id;
}

function onCloseModal() {
    let objMod = document.getElementById("modal-container");
    objMod.className = 'one out';
}

function onRightModalClick() {
    if (currentImage < imgArr.length - 1) {
        currentImage = Number(currentImage) + 1;
    } else currentImage = 0;
    let objMod = document.getElementById("modal-container");
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
}
function ModalClick() {
    document.getElementById("x").src = "resource/image/x.png";
}
function ModalClickO() {
    document.getElementById("x").src = "resource/image/xce.png";
}
function RightModalClick() {
    document.getElementById("r").src = "resource/image/r.png";
}
function RightModalClickO() {
    document.getElementById("r").src = "resource/image/rce.png";
}
function LeftModalClick() {
    document.getElementById("l").src = "resource/image/l.png";
}
function LeftModalClickO() {
    document.getElementById("l").src = "resource/image/lce.png";
}


function onLeftModalClick() {
    if (currentImage > 0) {
        currentImage = Number(currentImage) - 1;
    } else currentImage = imgArr.length - 1;
    let objMod = document.getElementById("modal-container");
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
}

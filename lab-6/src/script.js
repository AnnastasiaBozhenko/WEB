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
    }, 2000);
}
function onImageClick() {
    let id = this.id;
    let obj = document.getElementById(id);
    let objMod = document.getElementById("modal-container");
    let objModImg = document.getElementById("modal-image");
    objModImg.style.backgroundImage = "url(" + obj.src + ")";
    objModImg.onerror = function () {
        objMod.style.backgroundImage = "url(" + this.DEFAULT_IMAGE_URL + ")"
    };
    objMod.className = 'one';
    objMod.style.display = "block";
    currentImage = id;
}
function onCloseModalClick() {
    let objMod = document.getElementById("modal-container");
    objMod.className = 'one out';
}
function CloseModalClickOver() {
    document.getElementById("closeButton").src = "resource/image/x.png";
}
function CloseModalClickOut() {
    document.getElementById("closeButton").src = "resource/image/xce.png";
}
function onRightModalClick() {
    if (currentImage < imgArr.length - 1) {
        currentImage = Number(currentImage) + 1;
    } else currentImage = 0;
    let objMod = document.getElementById("modal-image");
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
}
function RightModalClickOver() {
    document.getElementById("rightButton").src = "resource/image/r.png";
}function RightModalClickOut() {
    document.getElementById("rightButton").src = "resource/image/rce.png";
}
function onLeftModalClick() {
    if (currentImage > 0) {
        currentImage = Number(currentImage) - 1;
    } else currentImage = imgArr.length - 1;
    let objMod = document.getElementById("modal-image");
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
}
function LeftModalClickOver() {
    document.getElementById("leftButton").src = "resource/image/l.png";
}
function LeftModalClickOut() {
    document.getElementById("leftButton").src = "resource/image/lce.png";
}
let buttonRightModalClick = document.getElementById("idRightButton");
buttonRightModalClick.addEventListener("mouseover",RightModalClickOver);
buttonRightModalClick.addEventListener("mouseout",RightModalClickOut);
buttonRightModalClick.addEventListener("click",onRightModalClick);
let buttonLeftModalClick = document.getElementById("idLeftButton");
buttonLeftModalClick.addEventListener("mouseover",LeftModalClickOver);
buttonLeftModalClick.addEventListener("mouseout",LeftModalClickOut);
buttonLeftModalClick.addEventListener("click",onLeftModalClick);
let buttonCloseModalClick = document.getElementById("idCloseButton");
buttonCloseModalClick.addEventListener("mouseover",CloseModalClickOver);
buttonCloseModalClick.addEventListener("mouseout",CloseModalClickOut);
buttonCloseModalClick.addEventListener("click",onCloseModalClick);
document.addEventListener("keydown",function(event) {
    if (event.key == 'ArrowRight') {
        onRightModalClick();
    }
});
document.addEventListener("keydown",function(event) {
    if (event.key == 'ArrowLeft') {
        onLeftModalClick();
    }
});
document.getElementById("modal-back").addEventListener("click",onCloseModalClick);


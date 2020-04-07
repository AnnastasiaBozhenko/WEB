var currentImage = 0;
var DEFAULT_IMAGE_URL = 'resource/image/X.png';
let imgArr = [
    'resource/image/Noragami.jpg',
    'resource/image/SwordArtOnlinjnkjn.jpg',
    'resource/image/GuiltyCrown.jpg',
    'resource/image/DeathNote.jpg',
    'resource/image/DeathNoasdasdasdasdte.jpg',
// 'resource/image/NoGameNoLife.jpg',
// 'resource/image/Parasyte.png',
// 'resource/image/Re.jpg'
];

function addAllPhotosOnLoad() { // onLoadAddContent
    console.log('addAllPhotosOnLoad');
    console.log('imgArr' + imgArr);
    for (let i = 0; i < imgArr.length; i++) {
        let mainContainer = document.getElementById('main-container');
        addImage(mainContainer, i, imgArr[i]);
    }
    closeSpinner();
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
    divContent.addEventListener("click", oImageClick);
    divContent.height = 1300;
    divContent.width = 1000;
    parentDiv.appendChild(divContent);
    element.appendChild(parentDiv);
}

function closeSpinner() { // hideSpinner
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 4000);
}

function oImageClick() { // onImageClick
    let id = this.id;
    let obj = document.getElementById(id);
    let objMod = document.getElementById("modal");
    objMod.style.backgroundImage = "url(" + obj.src + ")";
    objMod.onerror = function () {
        objMod.style.backgroundImage = "url(" + this.DEFAULT_IMAGE_URL + ")"
    };
    objMod.style.display = "block";
    currentImage = id;
}

function closeMod() { // onCloseModal
    let objMod = document.getElementById("modal");
    objMod.style.display = "none";
}

function right() { // onRightModalClick
    if (currentImage < imgArr.length - 1) {
        currentImage = Number(currentImage) + 1;
    } else currentImage = 0;
    let objMod = document.getElementById("modal");
    // console.log(currentImage);
    // console.log(imgArr[currentImage]);
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
    // objMod.onerror = function () {
    //     objMod.style.backgroundImage  = "url(" + sDEFAULT_IMAGE_URL + ")"
    // };
}

function left() { // onLeftModalClick
    if (currentImage > 0) {
        currentImage = Number(currentImage) - 1;
    } else currentImage = imgArr.length - 1;
    let objMod = document.getElementById("modal");
    // console.log(currentImage);
    // console.log(imgArr[currentImage]);
    objMod.style.backgroundImage = "url(" + imgArr[currentImage] + ")";
    // objMod.onerror = function () {
    //     objMod.style.backgroundImage  = "url(" + DEFAULT_IMAGE_URL + ")"
    // };
}

let imgArr = [
'resource/image/Noragami.jpg',
'resource/image/GuiltyCrown.jpg',
'resource/image/DeathNote.jpg',
'resource/image/SwordArt Online.jpg'
];

function addAllPhotosOnLoad() {
    console.log('addAllPhotosOnLoad');
    console.log('imgArr' + imgArr);
    let result = '';
    let id = 0;

    imgArr.forEach(img => {
        let val = '<div class="gallery-pills">';
        val += '<img id="' + id + '" src="' + img + '" onclick="oImageClick(this.id)" height="1259" width="949"/>';
        val += '</div>';
        result += val;
        id ++;
        console.log(img);
    });
    document.getElementById('main-container').innerHTML = result;
}

function oImageClick(id) {
    let obj = document.getElementById(id);

    if ( obj.style.transform === "scale(2)" ){
        obj.style.transform = "scale(1)"
    }
    else{
            obj.style.transform = "scale(2)";
        }

    // console.log(JSON.stringify(id));
}

// 1. Переменува це все нормально.
// 2. gallery-container / gallery-pills to flex box
// 3.
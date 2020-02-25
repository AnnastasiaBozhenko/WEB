function switchDisplaying() {
    var targetBlock = document.getElementById('target');
    let valueToChange = '';
    if (targetBlock.style.display == 'none') {
        valueToChange = 'block';
    }
    if (targetBlock.style.display == 'block') {
        valueToChange = 'none';
    }
    targetBlock.style.display = valueToChange;
}
function showAbstract(index) {
    var abstractElement = document.getElementById('abstract-popup-' + index);
    if (abstractElement.style.display === 'block') {
        abstractElement.style.display = 'none';
    } else {
        abstractElement.style.display = 'block';
    }
}

function showBio(index, offset=0) {
    var bioElement = document.getElementById('bio-popup-' + index + "-" + offset);
    if (bioElement.style.display === 'block') {
        bioElement.style.display = 'none';
    } else {
        bioElement.style.display = 'block';
    }
}

function openCamera() {
    var input = document.getElementById('fileInput');
    input.setAttribute('capture', 'camera');
    input.click();
}

const download = document.getElementById("fileRequest");

download.addEventListener('click', request);

function request() {
    window.location = './demoPdf.pdf';
}
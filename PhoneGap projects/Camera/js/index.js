var cameraOpts;

window.onload = function () {
    document.addEventListener('deviceready', init, false);
}

function init() {
    var btnCam = document.getElementById('btnCam');
    btnCam.style.display = "block";

    cameraOpts = {
        quality: 100,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG
    };
}

function takePic() {
    navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOpts);
}

function cameraSuccess(imageData) {
    var result = document.getElementById('resultImg');
    result.src = imageData;
}

function cameraFail(message) {
    alert("Error: " + message);
}
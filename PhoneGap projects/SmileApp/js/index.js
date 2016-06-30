var cameraOpt;

window.onload - function () {
    document.addEventListener("deviceready", init, false);

}

function init() {
    var buttonCam = document.getElementById("btnCam");
    buttonCam.style.display = "block";
    cameraOpt = {
        quality: 40,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true
    };
}

function takePic() {
    navigator.camera.getPicture(cameraSucess, cameraFail, cameraOpt);
}

function cameraFail(msg) {
    alert("Error: " + msg);
}

function cameraSucess(imageData) {
    var result = document.getElementById('resultImg');
    result.src = imageData;
}
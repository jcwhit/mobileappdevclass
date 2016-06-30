window.onload = function () {
    document.addEventListener('deviceready', init, false);
    init();
}

function init() {

}

function getLocation() {
    var options = {
        maximumAge: 3000,
        timeOut: 5000,
        enableHighAccuracy: true
    };
    navigator.geolocation.getCurrentPosition(success, failure, options);
}

function success(position) {
    var accuracy = position.coords.accuracy;
    var altitiude = position.coords.altitude;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var timestamp = position.timestamp;

    var output = "accuracy " + accuracy + "<br/>";
    output += "altitude " + altitiude + "<br/>";
    output += "latitude " + latitude + "<br/>";
    output += "longitude " + longitude + "<br/>";
    output += "timestamp " + timestamp + "<br/>";

    document.getElementById('results').innerHTML = output;

    var mapOptions = {
        center: {
            lat: latitude,
            lng: longitude
        },
        zoom: 18
    };

    var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: {
            lat: latitude,
            lng: longitude
        },
        map: map
    });
}

function clearScreen() {
    document.getElementById('mapCanvas').innerHTML = "";
    document.getElementById('mapCanvas').style.backgroundColor = "white";
    document.getElementById('results').innerHTML = "";
}

function failure(msg) {
    alert("failure:" + msg.message);
}
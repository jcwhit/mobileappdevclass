window.onload = function () {
    document.addEventListener("deviceready", init, false);
    init();
};

function init() {
    document.getElementById('btnJoke').addEventListener('click', getJoke, false);
    document.getElementById('btnQuery').addEventListener('click', getNewJoke, false);
    document.getElementById('buttonZip').addEventListener('click', getWeather, false);
    document.getElementById('btnTrain').addEventListener('click', getTrainInfo, false);
}

//-----------------Jokes---------------------
function getJoke() {
    $.ajax({
        type: "GET",
        url: "http://api.icndb.com/jokes/random/",
        dataType: "text",
        success: function (result) {
            showJoke(result);
        }
    });
}

function showJoke(result) {
    var json = jQuery.parseJSON(result);
    document.getElementById('resultJoke').innerHTML = json.value.joke;
}

function getNewJoke() {
    var fName = document.getElementById('fName').value;
    var lName = document.getElementById('lName').value;
    $.ajax({
        url: "http://api.icndb.com/jokes/random/?firstName=" + fName + "&lastName=" + lName,
        dataType: "text",
        success: function (result) {
            showJokeQuery(result)
        },
        type: "GET"
    });
}

function showJokeQuery(result) {
    var json = jQuery.parseJSON(result);
    document.getElementById('resultQuery').innerHTML = json.value.joke;
}

//--------------Weather---------------//
function getWeather() {
    var zip = document.getElementById('zip').value;
    $.ajax({
        type: "GET",
        url: "http://wsf.cdyne.com/WeatherWS/Weather.asmx/GetCityWeatherByZIP?Zip=" + zip,
        dataType: "xml",
        success: function (xml) {
            showWeather(xml);
        }
    });
}

function showWeather(xml) {
    var city = xml.getElementsByTagName('City')[0].firstChild.nodeValue;
    var temperature = xml.getElementsByTagName('Temperature')[0].firstChild.nodeValue;
    var description = xml.getElementsByTagName('Description')[0].firstChild.nodeValue;
    var output = "";
    output += city + "<br/>";
    output += "Temperature: " + temperature + "<br/>";
    output += "Description: " + description + "<br/>";
    document.getElementById("resultWeather").innerHTML = output;
}
//-------------TRAINSSSSS------------------
function getTrainInfo() {
    $.ajax({
        type: "GET",
        url: "http://www3.septa.org/hackathon/Arrivals/90404/10",
        dataType: "text",
        success: function (output) {
            showTrains(output);
        }
    });
}

function showTrains(result) {
    var data = jQuery.parseJSON(result);

    var arr = data[Object.keys(data)];
    var northbound = arr[0].Northbound;
    var southbound = arr[1].Southbound;

    var output = "<img src='img/logo.gif'/><h1 id='north'>Northbound</h1><table class='northbound'>";
    output += "<tr><th>ID:</th><th>Destination</th><th>Depart Time</th><th>Service Type</th><th>Status</th></tr>";
    for (i = 0; i < northbound.length; i++) {
        output += "<tr class='trainCell'><th>" + northbound[i].train_id + "</th><th>" + northbound[i].destination + "</th><th>" + northbound[i].depart_time + "</th><th>" + northbound[i].service_type + "</th><th>" + northbound[i].status + "</th></tr>";
    }
    output += "</table>";
    output += "<h1 id='south'>Southbound</h1><table class='southbound'>";
    output += "<tr><th>ID:</th><th>Destination</th><th>Depart Time</th><th>Service Type</th><th>Status</th></tr>";
    for (i = 0; i < southbound.length; i++) {
        output += "<tr class='trainCell'><th>" + southbound[i].train_id + "</th><th>" + southbound[i].destination + "</th><th>" + southbound[i].depart_time + "</th><th>" + southbound[i].service_type + "</th><th>" + southbound[i].status + "</th></tr>";
    }
    output += "</table>";
    document.getElementById("trainInfo").innerHTML = output;
}
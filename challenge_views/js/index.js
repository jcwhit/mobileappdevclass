var myData = {
    items: [
        {
            name: "James",
            place: "France",
            thing: "Books"
        },
        {
            name: "Laura",
            place: "Mexico",
            thing: "Chairs"
        },
        {
            name: "Sam",
            place: "Italy",
            thing: "Paper"
        }
    ]
};

function changeStyleOne() {
    var namesArray = document.getElementById('style');
    namesArray.setAttribute('href', 'css/index.css');
    var firstBox = document.getElementById('table');
    firstBox.innerHTML = "<div class='row tableheader One'>" +
        "<div class='namecellOne'>Names</div>" +
        "<div class='placecellOne'>Places</div>" +
        "<div class='thingcellOne'>Things</div>" +
        "</div>" +
        "<div class='row One'>" +
        "<div class='namecellOne'>" + myData.items[0].name + "</div>" +
        "<div class='placecellOne'>" + myData.items[0].place + "</div>" +
        "<div class='thingcellOne'>" + myData.items[0].thing + "</div>" +
        "</div>" +
        "<div class='row One'>" +
        "<div class='namecellOne'>" + myData.items[1].name + "</div>" +
        "<div class='placecellOne'>" + myData.items[1].place + "</div>" +
        "<div class='thingcellOne'>" + myData.items[1].thing + "</div>" +
        "</div>" +
        "<div class='row One'>" +
        "<div class='namecellOne'>" + myData.items[2].name + "</div>" +
        "<div class='placecellOne'>" + myData.items[2].place + "</div>" +
        "<div class='thingcellOne'>" + myData.items[2].thing + "</div>" +
        "</div>";
}


function changeStyleTwo() {
    var namesArray = document.getElementById('style');
    namesArray.setAttribute('href', 'css/indexTwo.css');
    var firstBox = document.getElementById('table');
    firstBox.innerHTML = "<div><ul id='box1' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:" + myData.items[0].name + "</li>" +
        "<li class='placecellOne'>Places:" + myData.items[0].place + "</li>" +
        "<li class='thingcellOne'>Things:" + myData.items[0].thing + "</li></ul></div>" +
        "<div><ul id='box2' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:" + myData.items[1].name + "</li>" +
        "<li class='placecellOne'>Places:" + myData.items[1].place + "</li>" +
        "<li class='thingcellOne'>Things:" + myData.items[1].thing + "</li></ul></div>" +
        "<div><ul id='box3' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:" + myData.items[2].name + "</li>" +
        "<li class='placecellOne'>Places:" + myData.items[2].place + "</li>" +
        "<li class='thingcellOne'>Things:" + myData.items[2].thing + "</li></ul></div>";

}

function changeStyleThree() {
    var namesArray = document.getElementById('style');
    namesArray.setAttribute('href', 'css/indexThree.css');
    var box = document.getElementById('table');
    box.innerHTML = "<div><ul id='box' class='row'>" +
        "<li class='first name' onclick=" + "displayInfo('James');" + ">" + myData.items[0].name + "</li>" +
        "<li class='first name' onclick=" + "displayInfo('Laura');" + ">" + myData.items[1].name + "</li>" +
        "<li class='first name' onclick=" + "displayInfo('Sam');" + ">" + myData.items[2].name + "</li>" +
        "</ul></div>";
}

function displayInfo(info) {
    if (info == 'James') {
        var disp = document.getElementById("display");
        disp.innerHTML = myData.items[0].name + '-' + myData.items[0].place + '-' + myData.items[0].thing;
    }
    if (info == 'Laura') {
        var dispTwo = document.getElementById("display");
        dispTwo.innerHTML = myData.items[1].name + '-' + myData.items[1].place + '-' + myData.items[1].thing;
    }
    if (info == 'Sam') {
        var dispThree = document.getElementById("display");
        dispThree.innerHTML = myData.items[2].name + '-' + myData.items[2].place + '-' + myData.items[2].thing;
    }
}
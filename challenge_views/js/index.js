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
        "<div class='namecellOne'>James</div>" +
        "<div class='placecellOne'>France</div>" +
        "<div class='thingcellOne'>Books</div>" +
        "</div>" +
        "<div class='row One'>" +
        "<div class='namecellOne'>Laura</div>" +
        "<div class='placecellOne'>Mexico</div>" +
        "<div class='thingcellOne'>Chairs</div>" +
        "</div>" +
        "<div class='row One'>" +
        "<div class='namecellOne'>Sam</div>" +
        "<div class='placecellOne'>Italy</div>" +
        "<div class='thingcellOne'>Paper</div>" +
        "</div>";
}


function changeStyleTwo() {
    var namesArray = document.getElementById('style');
    namesArray.setAttribute('href', 'css/indexTwo.css');
    var firstBox = document.getElementById('table');
    firstBox.innerHTML = "<div><ul id='box1' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:James</li>" +
        "<li class='placecellOne'>Places:France</li>" +
        "<li class='thingcellOne'>Things:Books</li></ul></div>" +
        "<div><ul id='box2' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:Laura</li>" +
        "<li class='placecellOne'>Places:Mexico</li>" +
        "<li class='thingcellOne'>Things:Chairs</li></ul></div>" +
        "<div><ul id='box3' class='row tableheader One'>" +
        "<li class='namecellOne'>Names:Sam</li>" +
        "<li class='placecellOne'>Places:Italy</li>" +
        "<li class='thingcellOne'>Things:Paper</li></ul></div>";

}

function changeStyleThree() {
    var namesArray = document.getElementById('style');
    namesArray.setAttribute('href', 'css/indexThree.css');
    var box = document.getElementById('table');
    box.innerHTML = "<div><ul id='box' class='row'>" +
        "<li class='first name' onclick=" + "displayInfo('James');" + ">James</li>" +
        "<li class='first name' onclick=" + "displayInfo('Laura');" + ">Laura</li>" +
        "<li class='first name' onclick=" + "displayInfo('Sam');" + ">Sam</li>" +
        "</ul></div>";
}

function displayInfo(info) {
    if (info == 'James') {
        var disp = document.getElementById("display");
        disp.innerHTML = "James-France-Books";
    }
    if (info == 'Laura') {
        var dispTwo = document.getElementById("display");
        dispTwo.innerHTML = "Laura-Mexico-Chairs";
    }
    if (info == 'Sam') {
        var dispThree = document.getElementById("display");
        dispThree.innerHTML = "Sam-Italy-Paper";
    }
}
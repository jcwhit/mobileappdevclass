window.onload = function () {
    document.getElementById('btnShow').addEventListener('click', showME, false);

    var btn = document.createElement('Button');
    var text = document.createTextNode('Click ME');
    btn.appendChild(text);
    document.body.appendChild(btn);

    var myDiv = document.getElementById('content');
    //myDiv.innerHTML('Georgia College'
    var myElements = myDiv.getElementsByClassName('large');
    myElements[0].innerHTML = "Georgia College";
}

function showME() {
    alert('show me');
}

function testJS() {

    var demo = document.getElementById('demo');
    demo.innerHTML = "<h1>HELLO</h1>";

    //alert('Testing JS');
    //var text = "ABCD";
    //var strLength = text.length;
    //alert(text.length);
    //var pos = text.search("B");
    //alert(pos);
    var values = ["Volvo", "Saab", "Fiat"];
    //alert(values[0]);
    //console.log("array testin" + values[0]);

    var results = "";
    var foods = ['Apple', 'Banana', 'Oranges'];
    for (var i in foods) {
        if (foods[i] == 'Apple') {
            results += foods[i] + ' are good! ';
        } else
            results += foods[i] + ' are ok ';
    }
    //alert(results);
    var count = 0;
    for (var i = 0; i < foods.length; i++) {
        if (foods[i] != 'Apple') {
            count++;
        }
    }
    //alert(count);

    //var person = {
    //firstName: "John",
    // lastName: "Doe",
    // age: 50,
    // eyeColor: "blue"
    //    //};
    //console.log("Full Name: " + person.firstName + " " + person.lastName);
    var myFather = new Person("Bob", "dod", 60, "bue");
    display(myFather);

    result = "";
    for (var field in myFather) {
        results += "myFather." + field + myFather[field] + "<br>";
    }

    console.log(result);

    var text = '{"employees":[' +
        '{"firstName":"John,"lastNme":"Doe"}, ' +
        '{"firstName":"Anna","lastName":"Smith"},' +
        '{"firstName":"Peter","lastName":"Jones"}]}';
    //var obj = JSON.parse(text);

    //console.log("First Employee: " + obj.employees[0].firstName);

    var myInputs = document.getElementsByTagName("input");

    console.log("Number of input elements: " + myInputs.length);
    myInputs[0].style.backgroundColor = "red";

    var image = document.getElementById("myImage");
    if (image.src.match("go")) {
        image.src = "img/stop.png";
    } else {
        image.src = "img/go.png";
    }
}

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function display(obj) {
    console.log("First Name: " + obj.firstName + " " + obj.LastName);
}

function addNumbers() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');

    result.value = parseInt(num1.value) + parseInt(num2.value);
}
window.onload = function () {
    showOptions();

    var keys = localStorage.getItem("keys");
    if (keys == null) {
        var temp = [];
        localStorage.setItem('keys', JSON.stringify(temp));
    }
    //testIt();
}

function testIt() {
    var fruits = ["bannana", "orange", "apple", "mango"];
    var str = JSON.stringify(fruits);

    localStorage.setItem("fruits", str);

    var str2 = localStorage.getItem("fruits");
    var fruits2 = JSON.parse(str2);
    fruits2.push("Grapes");

    for (i = 0; i < fruits2.length; i++) {
        console.log("FRUIT" + i + ": " + fruits2[i]);
        localStorage.setItem(fruits2[i], ((i + 1) * 10));
    }

    var pos = fruits2.indexOf("apple");
    console.log("Position of Apple: " + pos);
    fruits2.splice(pos, 1);
    pos = fruits2.indexOf("Pear");
    console.log("Position of pear: " + pos);

    str = JSON.stringify(fruits2);
    console.log("Updated fuits:", fruits2);

    localStorage.setItem("fruits", str);
    /*localStorage.setItem("building", "atkinson");
    localStorage.setItem("course", "CSCI_3950");

    console.log("Building:" + localStorage.getItem("building"));
    console.log("Length: " + localStorage.length);

    for (i = 0; i < localStorage.length; i++) {
        console.log("KEY: " +
            localStorage.key(i));
    }

    localStorage.removeItem("building");

    localStorage.clear();*/

}

function opStore() {
    showPage("pgStore");
}

function opGet() {
    showPage("pgGet");
}

function opShowAll() {
    showPage("pgShowAll");
    var str = "";

    //Get All Keys
    var keys = JSON.parse(localStorage.getItem('keys'));
    //For each Key add key/value to String
    for (i = 0; i < keys.length; i++) {
        str += "key: " + keys[i] + " Value: " + localStorage.getItem(keys[i]) + "<br/>"
    }
    //Update Display
    document.getElementById("result").innerHTML = str;
}

function showOptions() {
    showPage("pgOptions");
}

function showPage(pgShow) {
    //Makes pgGet visible -- and pgStore invisible
    var pages = document.getElementsByClassName("page");
    for (i = 0; i < pages.length; i++) {
        pg = pages[i];
        pg.classList.remove("show");
        pg.classList.add("hide");
    }
    document.getElementById(pgShow).classList.add("show");
    document.getElementById(pgShow).classList.remove("hide");

    //Clear all existing data
    document.getElementById("result").innerHTML = "";
    clearForm();
}

function item(upc, product, quantity) {
    this.upc = upc;
    this.product = product;
    this.quantity = quantity;
}

function btnStoreIt() {
    var upc = document.getElementById('upc');
    var product = document.getElementById('product');
    var quantity = document.getElementById('quantity');

    var key = upc.value;
    var myItem = new item(upc.value, product.value, quantity.value);
    var str = JSON.stringify(myItem);

    localStorage.setItem(key, str);
    addKey(key);
}

function btnGetIt() {
    var key = document.getElementById('upcGet');

    var str = localStorage.getItem(key.value);

    document.getElementById('result').innerHTML = str;

    var myItem = JSON.parse(str);
    console.log("product: " + myItem.product);
    console.log("quantity: " + myItem.quantity);


}

function btnRemoveIt() {
    var key = document.getElementById('upcGet');
    localStorage.removeItem(key.value);
    removeKey(key.value);
}

//updates "keys" field
function addKey(keystr) {
    //Get current array of current keys stored
    var keys = JSON.parse(localStorage.getItem("keys"));

    if (keys.indexOf(keystr) == -1) {
        keys.push(keystr);
        localStorage.setItem("keys", JSON.stringify(keys));
    }
    //add keystr to the array if it is not already in the array

}

function removeKey(keystr) {
    var keys = JSON.parse(localStorage.getItem("keys"));
    var pos = keys.indexOf(keystr);
    //Get  array of keys stored
    if (pos != -1) {
        keys.splice(pos, 1);
        localStorage.setItem("keys", JSON.stringify(keys));
    }
    //remove the keystr from the array
}

function clearForm() {
    var upc = document.getElementById("upc");
    var product = document.getElementById("product");
    var quantity = document.getElementById("quantity");
    var key = document.querySelector("#upcGet");

    upc.value = "";
    product.value = "";
    quantity.value = "";
    key.value = "";
}
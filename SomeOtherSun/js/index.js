/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


var bool = false;
//this will store the initial space for the character
function storeInitChar() {
    //localStorage.clear();
    var charList = localStorage.getItem('charList');
    if (charList == null) {
        localStorage.setItem('charList', '');
        bool = true;
    }
    var charList = localStorage.getItem('charList');

    var charName = document.getElementById('charName').value;

    if (charList.length > 1) {
        charList += "," + charName;
    } else {
        charList = charName;
    }
    var charInfo = {
        "charName": charName,
        "goodRep": "0",
        "badRep": "0",
        "repdiff": "0",
        "totalrep": "0",
        "grit": "0",
        "smarts": "0",
        "beef": "0",
        "sense": "0",
        "nerves": "0"
    };
    localStorage.setItem(charName, JSON.stringify(charInfo));
    localStorage['charList'] = charList;

}

function editCharacter(charName) {
    console.log("check");
    console.log(charName);

    //TODO: Creat for first time
    //Check if first time by checking id both reps are 0
    //if so run function for first time creation

    //else:
    //character data
    var charData = JSON.parse(localStorage.getItem(charName));

    //get name block
    var nameBlock = document.getElementById('nameBlock');
    //clear data
    nameBlock.innerHTML = "";
    //update
    var name = document.createElement('h2');
    name.appendChild(document.createTextNode(charData.charName));
    nameBlock.appendChild(name);

    //get rep Block
    var repBlock = document.getElementById('repBlock');
    console.log(charData);
    //first clear the block for update
    repBlock.innerHTML = "";
    //now update the data
    var goodRep = document.createElement('h3');
    goodRep.appendChild(document.createTextNode("Good Rep: " + charData.goodRep));
    //add it to the block
    repBlock.appendChild(goodRep);

    //badRep//now update the data
    var badRep = document.createElement('h3');
    badRep.appendChild(document.createTextNode("Bad Rep: " + charData.badRep));
    //add it to the block
    repBlock.appendChild(badRep);

    //totalRep
    var totRep = document.createElement('h3');
    totRep.appendChild(document.createTextNode("Total Rep: " + charData.totalrep));
    //add it to the block
    repBlock.appendChild(totRep);

    //Rep Diff
    var diffRep = document.createElement('h3');
    diffRep.appendChild(document.createTextNode("Rep Difference: " + charData.repdiff));
    //add it to the block
    repBlock.appendChild(diffRep);

    //stats
    //get stat block
    var statBlock = document.getElementById('statBlock');
    //clear block
    statBlock.innerHTML = "";
    //update
    var grit = document.createElement('h3');
    grit.appendChild(document.createTextNode("Grit: " + charData.grit));
    statBlock.appendChild(grit);
    //smarts
    var smarts = document.createElement('h3');
    smarts.appendChild(document.createTextNode("Smarts: " + charData.smarts));
    statBlock.appendChild(smarts);
    //Beef
    var beef = document.createElement('h3');
    beef.appendChild(document.createTextNode("Beef: " + charData.beef));
    statBlock.appendChild(beef);
    //Sense
    var sense = document.createElement('h3');
    sense.appendChild(document.createTextNode("Sense: " + charData.sense));
    statBlock.appendChild(sense);
    //nerves
    var nerves = document.createElement('h3');
    nerves.appendChild(document.createTextNode("Nerves: " + charData.nerves));
    statBlock.appendChild(nerves);
}

//update the character list 
function updateCharList(charList) {
    console.log(charList.length);
    for (var i = 0; i < charList.length; i++) {

        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var name = document.createTextNode(charList[i]);
        link.appendChild(name);
        //working!!
        link.className = "ui-btn";
        //working!!
        link.href = "#characterSheet";
        //this is how you do it dont get rid of this
        (function (i) {
            link.addEventListener('click', function () {
                editCharacter(charList[i]);
            }, false);
        })(i);
        listItem.appendChild(link);
        document.getElementById('charList').appendChild(listItem);
    }
}
//runs when #charList
$(document).on('pagebeforeshow', '#charSel', function () {
    //$('div.charSelect').html("<div></div>");
    var charListLocal = localStorage.getItem('charList');
    var charList = "";

    //if the charList has been create split it
    if (charListLocal != null) {
        charList = charListLocal.split(',');
    }
    console.log(charList);

    //clear the char list
    document.getElementById('charList').innerHTML = "";
    //generate the char list may need to check for variables
    updateCharList(charList);

    console.log("done");

});
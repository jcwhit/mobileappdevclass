//This is old code for the char selection screen, I hope to come back to it and allow for multiple characters

var bool = false;
//this will store the initial space for the character
function storeInitChar() {
    //localStorage.clear();
    var charList = localStorage.getItem('charList');
    if (charList == null) {
        localStorage.setItem('charList', '');
        localStorage.setItem('featureList', '');
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
        "goodRep": 0,
        "badRep": 0,
        "repdiff": 0,
        "totalrep": 0,
        "grit": 0,
        "smarts": 0,
        "beef": 0,
        "sense": 0,
        "nerves": 0,
        "wepList": "",
        "selectedWep": ""
    };
    localStorage.setItem(charName, JSON.stringify(charInfo));
    localStorage['charList'] = charList;

}

var grit = 0;
var smarts = 0;
var beef = 0;
var sense = 0;
var nerves = 0;

function updateStats() {
    grit = 0;
    smarts = 0;
    beef = 0;
    sense = 0;
    nerves = 0;
}

function editCharacter(charName) {
    console.log("check");
    console.log(charName);

    //TODO: Creat for first time
    //Check if first time by checking id both reps are 0
    //if so run function for first time creation 

    //character data
    var charData = JSON.parse(localStorage.getItem(charName));

    //update charValues

    //update datat if needed
    $('#btnUpdateChar').click(function () {
        updateStats();
        var selectedWep = charData.selectedWep;
        console.log(selectedWep);
        if (charData[selectedWep].length > 2) {
            var wepData = charData[selectedWep];
            var featList = wepData.split(',');
            console.log(featList);
            for (var i = 0; i < featList.length; i++) {
                var feat = JSON.parse(localStorage.getItem(featList[i]));
                console.log(feat);
                if (feat.type == 'stat') {
                    if (feat.stat == 'grit') {
                        grit = grit + feat.value;
                    }
                    if (feat.stat == 'smarts') {
                        smarts = smarts + feat.value;
                        console.log(smarts);
                    }
                    if (feat.stat == 'beef') {
                        beef = beef + feat.value;
                    }
                    if (feat.stat == 'sense') {
                        sense = sense + feat.value;
                    }
                    if (feat.stat == 'nerves') {
                        nerves = nerves + feat.value;
                    }
                }
                if (feat.type == 'ability') {
                    console.log('abil');
                }
                if (feat.type == 'damage') {
                    console.log('damage');
                }
                if (feat.type == 'other') {
                    consol.log('other');
                }
            }
        }
        editCharacter(charName);
    });
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
    var gritAdd = document.createElement('h3');
    gritAdd.appendChild(document.createTextNode("Grit: " + grit));
    statBlock.appendChild(gritAdd);
    //smarts
    var smartsAdd = document.createElement('h3');
    smartsAdd.appendChild(document.createTextNode("Smarts: " + smarts));
    statBlock.appendChild(smartsAdd);
    //Beef
    var beefAdd = document.createElement('h3');
    beefAdd.appendChild(document.createTextNode("Beef: " + beef));
    statBlock.appendChild(beefAdd);
    //Sense
    var senseAdd = document.createElement('h3');
    senseAdd.appendChild(document.createTextNode("Sense: " + sense));
    statBlock.appendChild(senseAdd);
    //nerves
    var nervesAdd = document.createElement('h3');
    nervesAdd.appendChild(document.createTextNode("Nerves: " + nerves));
    statBlock.appendChild(nervesAdd);

    //combat stats here
    var combatBlock = document.getElementById('comBlock');
    combatBlock.innerHTML = "";
    //melee
    var melee = document.createElement('h3');
    var melVal = beef + charData.repdiff;
    melee.appendChild(document.createTextNode('Melee: ' + melVal));
    combatBlock.appendChild(melee);
    //range
    var range = document.createElement('h3');
    var rngVal = sense + charData.repdiff;
    range.appendChild(document.createTextNode('Ranged: ' + rngVal));
    combatBlock.appendChild(range);
    //Toughness
    var tough = document.createElement('h3');
    tough.appendChild(document.createTextNode('Tougness: 10 + beef or nerves'));
    combatBlock.appendChild(tough);
    //Mobility
    var mobil = document.createElement('h3');
    var mobVal = nerves / 2;
    mobil.appendChild(document.createTextNode('Mobility: ' + mobVal));
    combatBlock.appendChild(mobil);

    //edit existing weapons
    var wepList = charData.wepList.split(',');
    console.log(wepList);
    var wepSect = document.getElementById('wepSection');
    //clear section for update
    wepSect.innerHTML = "";
    if (wepList.length > 1) {
        for (var i = 0; i < wepList.length; i++) {
            //each weapon
            var wep = document.createElement('a');
            wep.appendChild(document.createTextNode(wepList[i]));
            wep.className = "ui-btn";
            wep.href = '#editWeapon';
            (function (i) {
                wep.addEventListener('click', function () {
                    editWeapon(charData, wepList[i]);
                }, false);
            })(i);
            wepSect.appendChild(wep);
        }
    }
    //create links for weapon editing
    var weaponFeat = document.getElementById('btnEdWep');
    //already a JSON
    weaponFeat.addEventListener('click', addWeapon(charData), false);
}

function editWeapon(charInfo, wepName) {
    var featArea = document.getElementById('editfeatArea');
    console.log(wepName);
    //clear the data for update
    featArea.innerHTML = "";
    var featList = localStorage.getItem('featureList').split(',');
    var selectFeat = document.createElement('select');
    selectFeat.id = 'featSel';
    //add label for dropdown
    var featLabel = document.createElement('label');
    featLabel.for = 'featSel';
    featLabel.appendChild(document.createTextNode('Select Feature'));
    featArea.appendChild(featLabel);
    for (var i = 0; i < featList.length; i++) {
        var featOpt = document.createElement('option');
        featOpt.appendChild(document.createTextNode(featList[i]));
        featOpt.value = featList[i];
        selectFeat.appendChild(featOpt);
    }
    featArea.appendChild(selectFeat);

    //for added feats
    var addedArea = document.getElementById('editaddFeatArea');
    //clear for update
    addedArea.innerHTML = "";
    //get wep name
    var wepNameArea = document.getElementById('editwepNameArea');
    wepNameArea.innerHTML = "<h1>" + wepName + "</h1>";
    //add new feat to weapon
    var featsSelected = charInfo[wepName];
    var featExists = '';
    //convert to array to fill in already chosen feats
    var featArray = featsSelected.split(',');
    if (featArray.length > 1) {
        console.log('shit');
        for (var i = 0; i < featArray.length; i++) {
            var feat = document.createElement('h3');
            feat.appendChild(document.createTextNode(featArray[i]));
        }
    }
    var selected = '';

    //see if selected weapon
    if (charInfo.selectedWep == wepName) {
        console.log('yep');
        document.getElementById('editwepSelected').checked = true;
    }

    $('#editbtnFeatureAdd').click(function () {
        selected = $('#featSel').val();
        if (featsSelected.length < 2) {
            featsSelected = selected;
        } else {
            featsSelected += ',' + selected;
        }
    });

    $('#editbtnUpWep').click(function () {
        charInfo[wepName] = featsSelected;
        if (document.getElementById('editwepSelected').checked) {
            charInfo.selectedWep = wepName;
        }
        localStorage.setItem(charInfo.charName, JSON.stringify(charInfo));
    });
}

//need to make an edit version of this for already existing weapons ^^^^^^^
function addWeapon(charInfo) {
    //get wep name
    var wepName = document.getElementById('wepName');
    //add new feat to weapon
    $('#btnUpWep').click(function () {
        if (charInfo.wepList.length < 2) {
            charInfo[wepName.value] = "";
            //add to weapon list
            charInfo.wepList = wepName.value;
        } else {
            charInfo[wepName.value] = "";
            //add to weapon list
            charInfo.wepList += ',' + wepName.value;
        }
        localStorage.setItem(charInfo.charName, JSON.stringify(charInfo));
    });


}

//wasn't working now it does pretty sure the cause was missing calling the function add an onclick to btnAddFeat
function addFeature() {
    var featOpts = document.getElementsByName('feat');
    var statOpts = document.getElementsByName('stat');

    var feature = {
        "name": "",
        "cost": 0,
        "stat": "",
        "type": "",
        "value": ""
    };

    var name = document.getElementById('featName');
    var stat = document.getElementById('statVal');
    var abilDisc = document.getElementById('abilityDisc');
    var otherDisc = document.getElementById('otherDisc');
    //this saves the current changes to the json feature
    $('#btnSaveFeatChanges').click(function () {
        feature.name = name.value;
        for (var i = 0; i < featOpts.length; i++) {
            if (featOpts[i].checked) {
                if (featOpts[i].value == 'stat') {
                    feature.type = 'stat';
                    feature.value = parseInt(stat.value);
                    for (var j = 0; j < statOpts.length; j++) {
                        if (statOpts[j].checked) {
                            if (statOpts[j].value == 'grit') {
                                feature.stat = 'grit';
                            }
                            if (statOpts[j].value == 'smarts') {
                                feature.stat = 'smarts';
                            }
                            if (statOpts[j].value == 'beef') {
                                feature.stat = 'beef';
                            }
                            if (statOpts[j].value == 'sense') {
                                feature.stat = 'sense';
                            }
                            if (statOpts[j].value == 'nerves') {
                                feature.stat = 'nerves';
                            }
                        }
                    }
                }
                if (featOpts[i].value == 'ability') {
                    feature.type = 'ability';
                    feature.value = abilDisc.value;
                }
                if (featOpts[i].value == 'damage') {
                    feature.type = 'damage';
                    var selected = $('#dmg').val();
                    feature.value = selected;
                }
                if (featOpts[i].value == 'other') {
                    feature.type = 'other';
                    feature.value = otherDisc.value;
                }
            }
        }
        console.log(feature);
    });
    var featList = localStorage.getItem('featureList');
    $('#btnSaveFeat').click(function () {
        if (featList.length < 2) {
            featList = feature.name;
        } else {
            featList += "," + feature.name;
        }
        localStorage['featureList'] = featList;
        localStorage.setItem(feature.name, JSON.stringify(feature));
    });

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
        //^^^^Important closure bs
        listItem.appendChild(link);
        document.getElementById('charList').appendChild(listItem);
    }
}
//runs when #charList
$(document).on('pagebeforeshow', '#charSel', function () {
    //$('div.charSelect').html("<div></div>");
    //localStorage.clear();
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
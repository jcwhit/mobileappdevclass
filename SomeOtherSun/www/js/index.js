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
window.onload = function () {
    document.addEventListener('deviceready', init, false);
    init();
}

function init() {

    var char = localStorage.getItem('char');
    if (char == null) {
        var charInfo = {
            "charName": "",
            "goodRep": 0,
            "badRep": 0,
            "repdiff": 0,
            "totalrep": 0,
            "grit": 1,
            "smarts": 1,
            "beef": 1,
            "sense": 1,
            "nerves": 1,
            "totalHealth": 5,
            "currentHealth": 5,
            "damage": "",
            "abilities": ""
        };
        localStorage.setItem('char', JSON.stringify(charInfo));
    }
}

function rollInitiative() {
    var charInfo = JSON.parse(localStorage.getItem('char'));
    var init = document.getElementById('initiativeRoll');
    init.value = ((Math.floor(Math.random() * 20) + 1) + parseInt(charInfo.nerves) + parseInt(charInfo.repdiff));
}

function rollMelee() {
    var charInfo = JSON.parse(localStorage.getItem('char'));
    var melee = document.getElementById('rollMel');
    melee.value = ((Math.floor(Math.random() * 20) + 1) + parseInt(charInfo.beef) + parseInt(charInfo.repdiff));
}

function rollRange() {
    var charInfo = JSON.parse(localStorage.getItem('char'));
    var range = document.getElementById('rollRange');
    range.value = ((Math.floor(Math.random() * 20) + 1) + parseInt(charInfo.sense) + parseInt(charInfo.repdiff));
}

function rollAny() {
    var rollAny = document.getElementById('rollAnyInput');
    var selected = parseInt($('#any').val());
    rollAny.value = (Math.floor(Math.random() * selected) + 1);
}

$(document).on('pagebeforeshow', '#charSheet', function () {
    var charInfo = JSON.parse(localStorage.getItem('char'));

    if (charInfo.charName.length > 2) {
        //char name
        var charName = document.getElementById('name');
        charName.value = charInfo.charName;
        //rep
        var goodRep = document.getElementById('goodRep');
        goodRep.value = charInfo.goodRep;
        var badRep = document.getElementById('badRep');
        badRep.value = charInfo.badRep;
        //stats
        //grit
        var grit = document.getElementById('grit');
        grit.value = charInfo.grit;
        //smarts
        var smarts = document.getElementById('smarts');
        smarts.value = charInfo.smarts;
        //beef
        var beef = document.getElementById('beef');
        beef.value = charInfo.beef;
        //sense
        var sense = document.getElementById('sense');
        sense.value = charInfo.sense;
        //nerves
        var nerves = document.getElementById('nerves');
        nerves.value = charInfo.nerves;
        //health
        var healthCurrent = document.getElementById('health');
        healthCurrent.value = charInfo.currentHealth;
    } else {
        //char name
        var charName = document.getElementById('name');
        charName.value = 'name';
        //rep
        var goodRep = document.getElementById('goodRep');
        goodRep.value = 0;
        var badRep = document.getElementById('badRep');
        badRep.value = 0;
        //stats
        //grit
        var grit = document.getElementById('grit');
        grit.value = 1;
        //smarts
        var smarts = document.getElementById('smarts');
        smarts.value = 1;
        //beef
        var beef = document.getElementById('beef');
        beef.value = 1;
        //sense
        var sense = document.getElementById('sense');
        sense.value = 1;
        //nerves
        var nerves = document.getElementById('nerves');
        nerves.value = 1;
        //health

    }

    //combat block
    var comBlock = document.getElementById('comBlock');
    //health
    var healthLab = document.getElementById('healthLab');
    //clear for new data
    comBlock.innerHTML = "";
    healthLab.innerHTML = "";

    //health
    healthLab.appendChild(document.createTextNode('Health: ' + charInfo.totalHealth));
    //melee
    var melee = document.createElement('h3');
    var melVal = charInfo.beef + charInfo.repdiff;
    melee.appendChild(document.createTextNode('Melee: ' + melVal));
    comBlock.appendChild(melee);
    //range
    var range = document.createElement('h3');
    var rngVal = charInfo.sense + charInfo.repdiff;
    range.appendChild(document.createTextNode('Ranged: ' + rngVal));
    comBlock.appendChild(range);
    //Toughness
    var tough = document.createElement('h3');
    tough.appendChild(document.createTextNode('Tougness: 10 + beef or nerves'));
    comBlock.appendChild(tough);
    //Mobility
    var mobil = document.createElement('h3');
    var mobVal = charInfo.nerves / 2;
    mobil.appendChild(document.createTextNode('Mobility: ' + mobVal));
    comBlock.appendChild(mobil);

    //abilites
    var ability = document.getElementById('abilDataField');
    ability.value = charInfo.abilities;

    //damage
    var dmgDice = document.getElementById('dmgDice');
    dmgDice.innerHTML = "";
    dmgDice.appendChild(document.createTextNode('Damage Dice: ' + charInfo.damage));

    //do function for saving new char data
    $('#btnSaveCharSheet').click(function () {

        var charInfo = JSON.parse(localStorage.getItem('char'));
        var charName = document.getElementById('name');
        charInfo.charName = charName.value;
        //rep
        var goodRep = document.getElementById('goodRep');
        charInfo.goodRep = goodRep.value;
        var badRep = document.getElementById('badRep');
        charInfo.badRep = badRep.value;

        //rep diff and total
        if (charInfo.goodRep > charInfo.badRep) {
            charInfo.repdiff = charInfo.goodRep - charInfo.badRep;
        }

        if (charInfo.goodRep < charInfo.badRep) {
            charInfo.repdiff = charInfo.badRep - charInfo.goodRep;
        }

        //stats
        //grit
        var grit = document.getElementById('grit');
        charInfo.grit = grit.value;
        //smarts
        var smarts = document.getElementById('smarts');
        charInfo.smarts = smarts.value;
        //beef
        var beef = document.getElementById('beef');
        charInfo.beef = beef.value;
        //sense
        var sense = document.getElementById('sense');
        charInfo.sense = sense.value;
        //nerves
        var nerves = document.getElementById('nerves');
        charInfo.nerves = nerves.value;

        //health
        var healthCurr = document.getElementById('health');
        charInfo.currentHealth = healthCurr.value;

        //ability
        var ability = document.getElementById('abilDataField');
        charInfo.abilities = $('#abilDataField').val();

        //damage
        var selected = $('#dmg').val();
        charInfo.damage = selected;

        localStorage.setItem('char', JSON.stringify(charInfo));
        location.reload();
    });

    $('#btnSetTHel').click(function () {
        var charInfo = JSON.parse(localStorage.getItem('char'));
        var health = document.getElementById('health');
        charInfo.totalHealth = health.value;
        localStorage.setItem('char', JSON.stringify(charInfo));
        location.reload();
    });

});
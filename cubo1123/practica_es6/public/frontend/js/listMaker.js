"use strict";

function makeList() {
  fetch("http://localhost:8080/heroes/", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (json) {
    var heroes = json.response;
    var body = document.getElementsByTagName("BODY")[0];
    var list = document.createElement("ul");

    for (var i = 0; i < heroes.length; i++) {
      var hero = document.createElement("li");
      var heroImg = document.createElement("img");
      heroImg.src = heroes[i].image;
      hero.appendChild(heroImg);
      var heroName = document.createElement("span");
      heroName.textContent = heroes[i].name;
      hero.appendChild(heroName);
      list.appendChild(hero);
    }

    document.body.appendChild(list);
  });
}

window.onload = function get_body() {
  makeList();
};
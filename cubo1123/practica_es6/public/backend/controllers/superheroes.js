"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var router = _express.default.Router();

var mySet = new Set();
mySet.add({
  name: "Mantis",
  image: "https://vignette.wikia.nocookie.net/disney/images/8/88/GOTG2_-_Mantis.png/revision/latest?cb=20171130011758&path-prefix=es"
});
mySet.add({
  name: "Iron Man",
  image: "https://vignette.wikia.nocookie.net/marvelvscapcomespaol/images/7/71/Iron-Man-MvCI.png/revision/latest?cb=20170826202332&path-prefix=es"
});
mySet.add({
  name: "Capitán América",
  image: "https://vignette.wikia.nocookie.net/marvel/images/6/6d/Steve_Rogers_El_Capit%C3%A1n_Am%C3%A9rica.jpg/revision/latest?cb=20111119002914&path-prefix=es"
});
mySet.add({
  name: "Thor",
  image: "https://vignette.wikia.nocookie.net/marvel/images/9/9b/Thor_A_fresh_Start.png/revision/latest?cb=20180506021953&path-prefix=es"
});
mySet.add({
  name: "Hulk",
  image: "https://vignette.wikia.nocookie.net/vsbattles/images/d/d1/Open-uri20150608-27674-1jdbpa8_be64ca1b.png/revision/latest?cb=20180604131518"
});
mySet.add({
  name: "Hawkeye",
  image: "https://vignette.wikia.nocookie.net/marvelvscapcomespaol/images/d/d7/Hawkeye-MvCI.png/revision/latest?cb=20170903004834&path-prefix=es"
});
mySet.add({
  name: "Black Widow",
  image: "https://cdn-3.expansion.mx/dims4/default/f408ce4/2147483647/strip/true/crop/793x411+0+0/resize/800x415!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F09%2F64%2Ffb42ff95409099d1840d6668b854%2Fblackwidow.jpg"
});
mySet.add({
  name: "Star-Lord",
  image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2840450.jpg"
});
mySet.add({
  name: "Gamora",
  image: "https://vignette.wikia.nocookie.net/marvel-movies/images/c/ca/P%C3%B3ster_de_Gamora_en_los_GdlG_sintexto.jpg/revision/latest?cb=20140903215705&path-prefix=es"
});
mySet.add({
  name: "Groot",
  image: "https://www.sideshowtoy.com/wp-content/uploads/2018/03/marvel-avengers-infinity-war-groot-sixth-scale-figure-hot-toys-silo-903423.png"
});
mySet.add({
  name: "Drax",
  image: "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/3634685.jpg"
});
mySet.add({
  name: "Rocket Raccoon",
  image: "https://vignette.wikia.nocookie.net/marvelvscapcomespaol/images/8/85/RocketRaccoon-MvCI.png/revision/latest?cb=20170902222429&path-prefix=es"
});
mySet.add({
  name: "Doctor Strange",
  image: "https://imgc.allpostersimages.com/img/print/posters/doctor-strange-marvel-contest-of-champions-game-lifesize-standup_a-G-13838881-0.jpg"
});
mySet.add({
  name: "Vision",
  image: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/0a/Vision_Forest.jpg/revision/latest?cb=20150808002434"
});
router.get('/', function (req, res) {
  res.status(200).send({
    response: _toConsumableArray(mySet)
  });
});
module.exports = router;
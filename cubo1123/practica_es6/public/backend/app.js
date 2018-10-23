"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _superheroes = _interopRequireDefault(require("./controllers/superheroes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use((0, _cors.default)());
app.use('/heroes', _superheroes.default);
var server = app.listen(8080, function () {
  console.log('Server is running...');
});
module.exports = app;
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();

app.use(_express2['default']['static'](__dirname + '/public'));

app.get('/cities', function (request, response) {
    var cities = ['Lotopia', 'Caspiana', 'Indigo'];
    response.json(cities);
});
exports['default'] = app;
module.exports = exports['default'];
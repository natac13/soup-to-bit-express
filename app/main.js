'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var urlencode = _bodyParser2['default'].urlencoded({ extened: false });
var app = (0, _express2['default'])();
var cities = undefined;

app.use(_express2['default']['static'](__dirname + '/public'));

app.get('/cities', function (request, response) {
    cities = {
        'Lotopia': 'Some description for lot',
        'Caspiana': 'A second descrition',
        'Indigo': 'Last initial description'
    };
    response.json(Object.keys(cities));
});

app.post('/cities', urlencode, function (request, response) {
    var newCity = request.body;
    cities[newCity.name] = newCity.description;
    response.status(201).json(newCity.name);
});

exports['default'] = app;
module.exports = exports['default'];
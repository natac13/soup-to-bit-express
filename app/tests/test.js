'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _main = require('./../main');

var _main2 = _interopRequireDefault(_main);

describe('Requests to the root path', function () {
    it('should return a 200 status code', function (done) {
        (0, _supertest2['default'])(_main2['default']).get('/').expect(200).end(function (error) {
            if (error) {
                throw error;
            }
            done();
        });
    });
});
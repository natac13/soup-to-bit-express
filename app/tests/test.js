import request from 'supertest';
import app from './../main';

describe('Requests to the root path', () => {
    it('should return a 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200, done);
        });

    it('should return HTML format', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /html/, done);
    });

    it('should return an index file with cities', (done) => {
        request(app)
            .get('/')
            .expect(/cities/i, done);
    });
});


describe('Listing cities on /cities', () => {
    it('should return 200 status code', (done) => {
        request(app)
            .get('/cities')
            .expect(200, done);
    });

    it('should return json format', (done) => {
        request(app)
            .get('/cities')
            .expect('Content-Type', /json/, done)
    });

    it('should return initial cities', (done) => {
        request(app)
            .get('/cities')
            .expect(JSON.stringify(['Lotopia', 'Caspiana', 'Indigo']), done);
    });
});

describe('Creating new City', () => {
    it('should return a 201 status code', (done) => {
        request(app)
            .post('/cities')
            .send('name=Springfield&description=where+the+simpsons+live')
            .expect(201, done);
    });

    it('should return the city name', (done) => {
        request(app)
            .post('/cities')
            .send('name=Springfield&description=where+the+simpsons+live')
            .expect(/springfield/i, done);
    })
});


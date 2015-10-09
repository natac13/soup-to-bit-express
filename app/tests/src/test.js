import request from 'supertest';
import app from './../main';

describe('Requests to the root path', () => {
    it('should return a 200 status code', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((error) => {
                if(error) {throw error;}
                done();
            });
        });
});

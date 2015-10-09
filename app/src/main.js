import express from 'express';
import bodyParser from 'body-parser';
const urlencode = bodyParser.urlencoded({ extened: false });
const app = express();
let cities;

app.use(express.static(__dirname + '/public'));

app.get('/cities', (request, response) => {
    cities = {
        'Lotopia': 'Some description for lot',
        'Caspiana': 'A second descrition',
        'Indigo': 'Last initial description'
    };
    response.json(Object.keys(cities));
});

app.post('/cities', urlencode, (request, response) => {
    let newCity = request.body;
    cities[newCity.name] = newCity.description;
    response.status(201).json(newCity.name);
});

export default app;

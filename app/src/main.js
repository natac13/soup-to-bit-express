import express from 'express';
const app = express();

app.use(express.static(__dirname + '/public'));


app.get('/cities', (request, response) => {
    let cities = ['Lotopia', 'Caspiana', 'Indigo'];
    response.json(cities);
});
export default app;

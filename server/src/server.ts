import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Ouvindo endpoint');
    response.json(['Charlie','Alan','Gisele']);
    
});
app.listen(3333);
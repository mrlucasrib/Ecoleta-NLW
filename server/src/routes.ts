import express from 'express';

const routes = express.Router();

routes.get('/users', (request, response) => {
    console.log('Ouvindo endpoint');
    response.json(['Charlie','Alan','Gisele']);
    
});


export default routes;
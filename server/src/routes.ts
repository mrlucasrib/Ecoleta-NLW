import express, { request } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'
import { celebrate, Joi } from 'celebrate'

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();


const upload = multer(multerConfig);
routes.get('/items', itemsController.index);
routes.post('/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, { abortEarly: false 
    }),
    pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);




export default routes;
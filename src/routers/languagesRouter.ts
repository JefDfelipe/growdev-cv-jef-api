import { Router } from 'express';
import { LanguagesController } from '../controllers/languagesController';
import { HttpRouter } from '../contracts';

export class LanguagesRoutes implements HttpRouter {
  init() {
    const routes = Router();
    const controller = new LanguagesController();

    routes.get('languages', controller.index);
    routes.get('/languages/:id', controller.show);
    routes.post('languages', controller.store);
    routes.put('/languages/:id', controller.update);
    routes.delete('/languages/:id', controller.delete);

    return routes;
  };
};
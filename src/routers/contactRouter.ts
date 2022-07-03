import { Router } from 'express';
import { ContactController } from '../controllers/contactController';
import { HttpRouter } from '../contracts';

export class ContactRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new ContactController();

        routes.get('/contact', controller.index);
        routes.get('/contact/:id', controller.show);
        routes.post('/contact', controller.store);
        routes.put('/contact/:id', controller.update);
        routes.delete('/contact/:id', controller.delete);

        return routes;
    };
};
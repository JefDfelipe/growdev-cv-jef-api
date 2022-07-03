import { Router } from 'express';
import {ExperienceController} from '../controllers/experienceController';
import { HttpRouter } from '../contracts';

export class ExperienceRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new ExperienceController();

        routes.get('experience', controller.index);
        routes.get('/experience/:id', controller.show);
        routes.post('experience', controller.store);
        routes.put('/experience/:id', controller.update);
        routes.delete('/experience/:id', controller.delete);

        return routes;
    };
};
import { Router } from 'express';
import {SkillsController} from '../controllers/skillsController';
import { HttpRouter } from '../contracts';

export class SkillsRoutes implements HttpRouter {
    init() {
        const routes = Router();
        const controller = new SkillsController();

        routes.get('skills', controller.index);
        routes.get('/skills/:id', controller.show);
        routes.post('skills', controller.store);
        routes.put('/skills/:id', controller.update);
        routes.delete('/skills/:id', controller.delete);

        return routes;
    };
};
import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { userNameValidateMiddleware } from '../middlewares';
import { HttpRouter } from '../contracts';

export class UserRoutes implements HttpRouter {
  init() {
    const routes = Router();
    const controller = new UserController();

    routes.get('/user', controller.index);
    routes.get('/user/:id', controller.show);
    routes.post('/user', [userNameValidateMiddleware], controller.store);
    routes.put('/user/:id', [userNameValidateMiddleware], controller.update);
    routes.delete('/user/:id', controller.delete);

    return routes;
  };
};
import { Router } from 'express';
import { AddressController } from '../controllers/addressController';
import { HttpRouter } from '../contracts';

export default class AddressRoutes implements HttpRouter {
  init() {
    const routes = Router();
    const controller = new AddressController();

    routes.get('address', controller.index);
    routes.get('/address/:id', controller.show);
    routes.post('address', controller.store);
    routes.put('/address/:id', controller.update);
    routes.delete('/address/:id', controller.delete);

    return routes;
  };
};
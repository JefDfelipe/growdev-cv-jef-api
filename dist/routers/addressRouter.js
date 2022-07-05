"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRoutes = void 0;
const express_1 = require("express");
const addressController_1 = require("../controllers/addressController");
class AddressRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new addressController_1.AddressController();
        routes.get('address', controller.index);
        routes.get('/address/:id', controller.show);
        routes.post('address', controller.store);
        routes.put('/address/:id', controller.update);
        routes.delete('/address/:id', controller.delete);
        return routes;
    }
    ;
}
exports.AddressRoutes = AddressRoutes;
;

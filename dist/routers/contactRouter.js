"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const contactController_1 = require("../controllers/contactController");
class ContactRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new contactController_1.ContactController();
        routes.get('/contact', controller.index);
        routes.get('/contact/:id', controller.show);
        routes.post('/contact', controller.store);
        routes.put('/contact/:id', controller.update);
        routes.delete('/contact/:id', controller.delete);
        return routes;
    }
    ;
}
exports.ContactRoutes = ContactRoutes;
;

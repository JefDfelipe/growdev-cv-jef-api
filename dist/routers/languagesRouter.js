"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesRoutes = void 0;
const express_1 = require("express");
const languagesController_1 = require("../controllers/languagesController");
class LanguagesRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new languagesController_1.LanguagesController();
        routes.get('languages', controller.index);
        routes.get('/languages/:id', controller.show);
        routes.post('languages', controller.store);
        routes.put('/languages/:id', controller.update);
        routes.delete('/languages/:id', controller.delete);
        return routes;
    }
    ;
}
exports.LanguagesRoutes = LanguagesRoutes;
;

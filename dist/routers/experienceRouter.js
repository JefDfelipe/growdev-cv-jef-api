"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const experienceController_1 = require("../controllers/experienceController");
class ExperienceRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new experienceController_1.ExperienceController();
        routes.get('experience', controller.index);
        routes.get('/experience/:id', controller.show);
        routes.post('experience', controller.store);
        routes.put('/experience/:id', controller.update);
        routes.delete('/experience/:id', controller.delete);
        return routes;
    }
    ;
}
exports.default = ExperienceRoutes;
;

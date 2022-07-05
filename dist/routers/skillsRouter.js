"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsRoutes = void 0;
const express_1 = require("express");
const skillsController_1 = require("../controllers/skillsController");
class SkillsRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new skillsController_1.SkillsController();
        routes.get('skills', controller.index);
        routes.get('/skills/:id', controller.show);
        routes.post('skills', controller.store);
        routes.put('/skills/:id', controller.update);
        routes.delete('/skills/:id', controller.delete);
        return routes;
    }
    ;
}
exports.SkillsRoutes = SkillsRoutes;
;

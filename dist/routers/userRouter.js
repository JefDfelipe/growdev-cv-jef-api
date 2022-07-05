"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const middlewares_1 = require("../middlewares");
class UserRoutes {
    init() {
        const routes = (0, express_1.Router)();
        const controller = new userController_1.UserController();
        routes.get('/user', controller.index);
        routes.get('/user/:id', controller.show);
        routes.post('/user', [middlewares_1.userNameValidateMiddleware], controller.store);
        routes.put('/user/:id', [middlewares_1.userNameValidateMiddleware], controller.update);
        routes.delete('/user/:id', controller.delete);
        return routes;
    }
    ;
}
exports.UserRoutes = UserRoutes;
;

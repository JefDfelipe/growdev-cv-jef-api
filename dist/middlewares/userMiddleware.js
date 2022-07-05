"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userNameValidateMiddleware = void 0;
const errors_1 = require("../errors");
const constants_1 = require("../constants");
const userNameValidateMiddleware = (request, response, next) => {
    const { name } = request.body;
    if (name.length < 2 || name.length > 255) {
        throw new errors_1.HttpError((0, constants_1.invalidField)('Nome'), constants_1.HttpBadRequestCode);
    }
    ;
    next();
};
exports.userNameValidateMiddleware = userNameValidateMiddleware;

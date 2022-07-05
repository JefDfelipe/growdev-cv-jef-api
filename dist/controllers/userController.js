"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const services_1 = require("../services");
const errors_1 = require("../errors");
const constants_1 = require("../constants");
class UserController {
    async index(response) {
        const service = new services_1.UserService();
        try {
            const user = await service.find();
            return response.json(user.map(user => {
                return {
                    name: user.name.toUpperCase(),
                    profile: user.profile.toUpperCase(),
                };
            }));
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async show(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        try {
            const user = await service.findOne(id);
            return response.json({
                name: user?.name.toUpperCase()
            });
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async store(request, response) {
        const { name, profile, address, contact, experience, languages, skills } = request.body;
        const service = new services_1.UserService();
        try {
            const user = await service.create({
                name: name,
                profile: profile,
                address: address,
                contact: contact,
                experience: experience,
                languages: languages,
                skills: skills
            });
            return response.json(user);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async update(request, response) {
        const { id } = request.params;
        const { name, profile, address, contact, experience, languages, skills } = request.body;
        const service = new services_1.UserService();
        try {
            const user = await service.update({
                id: id,
                name: name,
                profile: profile,
                address: address,
                contact: contact,
                experience: experience,
                languages: languages,
                skills: skills
            });
            return response.json(user);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
    async delete(request, response) {
        const { id } = request.params;
        const service = new services_1.UserService();
        try {
            await service.delete(id);
            return response.sendStatus(204);
        }
        catch (error) {
            throw new errors_1.HttpError(constants_1.defaultErrorMessage, constants_1.HttpInternalErrorCode);
        }
        ;
    }
    ;
}
exports.UserController = UserController;
;
